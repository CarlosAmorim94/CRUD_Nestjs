import { Module } from '@nestjs/common';
import { UsuarioModule } from './users/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
