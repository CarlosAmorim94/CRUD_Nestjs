import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmaiUnico } from '../validacao/emailUnico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'Nome obrigatório' })
  nome: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  @EmaiUnico({ message: 'E-mail já cadastrado' })
  email: string;

  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
  senha: string;
}
