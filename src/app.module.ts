import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastrosModule } from './Cadastro/cadastros.module';
import { UsersModule } from './Users/users.module';

@Module({
  imports: [ CadastrosModule, UsersModule ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
