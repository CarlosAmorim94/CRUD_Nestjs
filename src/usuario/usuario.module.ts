import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';
import { EmailUnicoValidator } from './validacao/emailUnico.validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailUnicoValidator],
  imports: [],
})
export class UsuarioModule {}
