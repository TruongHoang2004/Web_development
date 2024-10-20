import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { User } from 'src/users/entities/user.entity';
import { Tasker } from 'src/taskers/entities/tasker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, User, Tasker])],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}
