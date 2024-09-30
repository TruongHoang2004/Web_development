import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateTaskDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    status: string;


    @IsNumber()
    payment: number;

    @IsNotEmpty()
    assignedTo: number;
}
