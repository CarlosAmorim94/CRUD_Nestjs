import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDTO } from './dto/createUser.dto';
import { ListUsersDTO } from './dto/listUsers.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}
  @Post()
  async criaUsuario(@Body() userData: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.name = userData.name;
    userEntity.email = userData.email;
    userEntity.password = userData.password;
    userEntity.id = randomUUID();

    await this.userRepository.save(userEntity);
    return { message: 'Usuário criado com sucesso' };
  }

  @Get()
  async getUser() {
    const savedUsers = await this.userRepository.findAll();
    const listUsers = savedUsers.map(
      (user) => new ListUsersDTO(user.id, user.name),
    );
    return listUsers;
  }
}
