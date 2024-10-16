import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import RegisterDto from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { QueryFailedError } from 'typeorm';
import LoginDto from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import TokenPayload from 'src/auth/tokenPayload.interface';
import { response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public async register(registrationData: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    const createUserData = {
      email: registrationData.email,
      name: registrationData.name,
      password: hashedPassword,
    };

    try {
      const createdUser = await this.usersService.create(createUserData);
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        if (error.driverError.code === 'ER_DUP_ENTRY') {
          throw new HttpException(
            'User with that email already exists',
            HttpStatus.BAD_REQUEST,
          );
        }
      }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async login(loginData: LoginDto) {
    const user = await this.verifyUser(loginData.email, loginData.password);
    return user;
  }

  public logout() {
    return response.clearCookie('jwt');
  }

  public async verifyUser(email: string, password: string) {
    try {
      const user = await this.usersService.getByEmail(email);
      const isPasswordMatching = await bcrypt.compare(password, user.password);
      if (!isPasswordMatching) {
        throw new HttpException(
          'Wrong credentials provided',
          HttpStatus.BAD_REQUEST,
        );
      }
      user.password = undefined;
      return user;
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public createAccessToken(userId: number) {
    const payload: TokenPayload = { userId };
    const token = this.jwtService.sign(payload);
    console.log(this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION'));
    return token;
  }

  public verifyToken(token: string) {
    return this.jwtService.verify(token);
  }
}
