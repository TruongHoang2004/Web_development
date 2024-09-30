import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import CreateUserDto from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async getAllUsers() {
    console.log('Get all users');
    return await this.usersRepository.find();
  }

  async getById(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    console.log('Get user by id', user);

    if (user) {
      return user;
    }

    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    console.log('Get user by email', user);

    if (user) {
      return user;
    }

    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async delete(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (user) {
      await this.usersRepository.delete(id);
      return user;
    }

    throw new BadRequestException('User not found');
  }

  async create(newUserData: CreateUserDto) {
    const newUser = this.usersRepository.create(newUserData);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async update(id: number, newUserData: CreateUserDto) {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (user) {
      await this.usersRepository.update(id, newUserData);
      return await this.usersRepository.findOne({ where: { id } });
    }

    throw new BadRequestException('User not found');
  }

  async count(email: string) {
    return await this.usersRepository.count({ where: { email } });
  }
}
