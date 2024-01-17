import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { UniqueEmail } from '../validations/uniqueEmail.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Nome obrigatório' })
  name: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  @UniqueEmail({ message: 'E-mail já cadastrado' })
  email: string;

  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
  password: string;
}
