import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async findAll() {
    return this.users;
  }

  async getByEmail(email: string) {
    const user = this.users.find((user) => user.email === email);
    return user !== undefined;
  }

  private getById(id: string) {
    const possibleUser = this.users.find((user) => user.id === id);

    if (!possibleUser) {
      throw new Error('Usuário não existe');
    }
    return possibleUser;
  }

  async update(id: string, userUpdated: Partial<UserEntity>) {
    const possibleUser = this.getById(id);

    Object.entries(userUpdated).forEach(([key, value]) => {
      if (key === 'id') return;

      possibleUser[key] = value;
    });

    return possibleUser;
  }

  async delete(id: string) {
    const user = this.getById(id);

    this.users = this.users.filter((user) => user.id !== id);

    return user;
  }
}
