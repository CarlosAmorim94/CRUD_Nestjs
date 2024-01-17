import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}
  @Post()
  async criaUsuario(@Body() userData: CreateUserDTO) {
    this.userRepository.save(userData);
    return userData;
  }

  @Get()
  async getUser() {
    return this.userRepository.findAll();
  }
}
