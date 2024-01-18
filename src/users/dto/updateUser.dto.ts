import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { UniqueEmail } from '../validations/uniqueEmail.validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'Nome obrigatório' })
  @IsOptional()
  name: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  @UniqueEmail({ message: 'E-mail já cadastrado' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
  @IsOptional()
  password: string;
}
