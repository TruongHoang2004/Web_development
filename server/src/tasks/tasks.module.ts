import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { User } from 'src/users/entities/user.entity';
import { Tasker } from 'src/taskers/entities/tasker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User, Tasker])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
