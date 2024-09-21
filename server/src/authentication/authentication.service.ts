import { UsersService } from 'src/users/users.service';
import { registerDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus } from '@nestjs/common';
import LoginDto from './dto/login.dto';

export class AuthenticationService {
  constructor(private readonly usersService: UsersService) {}

  public async register(registrationData: registerDto) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    try {
      const createUser = await this.usersService.create({
        ...registrationData,
        password: hashedPassword,
      });
      createUser.password = undefined;
      return createUser;
    } catch (error) {
      if (error?.code === MySQLErrorCode.UniqueViolation) {
        throw new HttpException(
          'User with that email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async login(loginData: LoginDto) {
    try {
      const user = await this.usersService.getByEmail(loginData.email);
      const isPasswordMatching = await bcrypt.compare(
        loginData.password,
        user.password,
      );
      if (!isPasswordMatching) {
        throw new HttpException('Wrong password', HttpStatus.BAD_REQUEST);
      }
      user.password = undefined;
      return user;
    } catch (error) {
      throw new HttpException(
        'Account with that email does not exist',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
