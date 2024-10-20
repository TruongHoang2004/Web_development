import { Category } from 'src/categories/entities/category.entity';
import { TaskStatus } from 'src/enum/taskStatus.enum';
import { Tasker } from 'src/taskers/entities/tasker.entity';
import { User } from 'src/users/entities/user.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  userId: number;

  @Column()
  taskerId: number;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'text', default: '' })
  description: string;

  @Column({ type: 'text', nullable: false })
  location: string;

  @Column({ type: 'int', nullable: false })
  categoryId: number;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.POSTED,
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  startedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  completedAt: Date;

  @ManyToOne(() => Tasker, (tasker) => tasker.tasks)
  @JoinColumn({ name: 'taskerId' })
  tasker: Tasker;

  @OneToMany(() => User, (user) => user.tasks)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Category, (category) => category.tasks)
  @JoinColumn({ name: 'categoryId' })
  category: Category;
}
