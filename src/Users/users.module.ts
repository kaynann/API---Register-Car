import { Module } from "@nestjs/common";
import { UsersControllers } from "./users.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { UsersService } from "./users.service";

@Module({
  imports: [ PrismaModule ],
  exports: [],
  providers: [ UsersService ],
  controllers: [ UsersControllers ],
})

export class UsersModule {}