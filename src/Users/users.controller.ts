import { Body, Controller, Delete, Get, Param, ParseFloatPipe, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUsersDTO } from "./dto/create-users.dto";
import { UsersService } from "./users.service";
import { UpdateUsersDTO } from "./dto/update-users.dto";
import { UpdatePatchUsersDTO } from "./dto/update-patch-users.dto";

@Controller('users')
export class UsersControllers {
  constructor (private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUsersDTO) {
      return this.usersService.create(data);
  }

  @Get()
  async read() {
    return this.usersService.list();
  }

  @Get(':id') 
  async readOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.show(id);
  }

  @Put(':id')
  async update(@Body() data: UpdateUsersDTO, @Param('id', ParseIntPipe) id: number) {
    return this.usersService.update(id, data);
  }

  @Patch(':id') 
  async updatePartial(@Body() data: UpdatePatchUsersDTO, @Param('id', ParseFloatPipe) id: number) {
    return this.usersService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }

  @Post(':userId/favorite-car/:carId')
  async favoriteCar(@Param('userId') userId: string, @Param('carId') carId: string) {
    return this.usersService.favoriteCar(Number(userId), Number(carId))
  }

  @Get('userId/favorite-cars')
  async getFavoriteCars(@Param('clientId') userId: string) {
    return this.usersService.getFavoriteCars(Number(userId));
  } 

  @Get(':userId/favorite')
  async listFavoriteCar(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.getUserWithFavoriteCars(userId);
  }

}