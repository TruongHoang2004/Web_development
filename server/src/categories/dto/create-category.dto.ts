import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @ApiProperty()
  description: string;
}
