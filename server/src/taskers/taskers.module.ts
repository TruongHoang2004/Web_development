import { Module } from '@nestjs/common';
import { TaskersService } from './taskers.service';
import { TaskersController } from './taskers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from 'src/reviews/entities/review.entity';
import { User } from 'src/users/entities/user.entity';
import { Tasker } from './entities/tasker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, User, Tasker])],
  controllers: [TaskersController],
  providers: [TaskersService],
})
export class TaskersModule {}
