import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'web-dev',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule implements OnModuleInit {
  async onModuleInit() {
    console.log('Database module has been initialized');
  }
}
