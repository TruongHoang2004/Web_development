import { IsEmail, IsNotEmpty, IsString } from '@nestjs/class-validator';

export default class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
