import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UniqueEmailValidator } from './validations/uniqueEmail.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, UniqueEmailValidator],
  imports: [],
})
export class UsuarioModule {}
