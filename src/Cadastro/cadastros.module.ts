import { Module } from "@nestjs/common";
import { CadastrosControllers } from "./cadastros.controller";
import { CadastrosService } from "./cadastros.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [ PrismaModule ],
  exports: [],
  controllers: [ CadastrosControllers ],
  providers: [ CadastrosService ]
})

export class CadastrosModule {}