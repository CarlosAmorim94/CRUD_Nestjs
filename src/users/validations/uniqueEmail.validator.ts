import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}
  async validate(
    email: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const existEmail = await this.userRepository.getByEmail(email);
    return !existEmail;
  }
}

export const UniqueEmail = (validationOptions: ValidationOptions) => {
  return (object: Object, props: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: props,
      options: validationOptions,
      constraints: [],
      validator: UniqueEmailValidator,
    });
  };
};
