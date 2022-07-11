import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
