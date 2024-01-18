import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDTO } from './dto/createUser.dto';
import { ListUsersDTO } from './dto/listUsers.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
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

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() userDataUpdate: UpdateUserDTO,
  ) {
    const updatedUser = await this.userRepository.update(id, userDataUpdate);
    return { user: updatedUser, message: 'Usuário atualizado com sucesso' };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const deletedUser = await this.userRepository.delete(id);
    return {
      user: deletedUser,
      message: 'Usuário deletado com sucesso',
    };
  }
}
