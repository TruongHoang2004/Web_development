import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        const user = await this.userRepository.findOneBy({ id: createTaskDto.assignedTo });
        const task = this.taskRepository.create({ ...createTaskDto, assignedTo: user });
        return this.taskRepository.save(task);
    }

    findAll(): Promise<Task[]> {
        return this.taskRepository.find({ relations: ['assignedTo'] });
    }

    findOne(id: number): Promise<Task> {
        return this.taskRepository.findOne({ where: { id }, relations: ['assignedTo'] });
    }

    async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
        const user = await this.userRepository.findOneBy({ id: updateTaskDto.assignedTo });
        const task = await this.taskRepository.preload({
            id,
            ...updateTaskDto,
            assignedTo: user,
        });

        if (!task) {
            throw new Error('Task not found');
        }

        return this.taskRepository.save(task);
    }

    async remove(id: number): Promise<void> {
        await this.taskRepository.delete(id);
    }
}
