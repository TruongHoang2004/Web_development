import { Review } from 'src/reviews/entities/review.entity';
import { Task } from 'src/tasks/entities/task.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tasker {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, unique: true })
  userId: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  rate: number;

  @Column({ type: 'int', default: 0 })
  numberOfTasks: number;

  @Column({ type: 'int', default: 0 })
  number_of_rates: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToMany(() => Task, (task) => task.tasker)
  tasks: Task[];

  @OneToMany(() => Review, (review) => review.tasker)
  reviews: Review[];
}
