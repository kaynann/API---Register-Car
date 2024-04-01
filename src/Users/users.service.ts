import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUsersDTO } from "./dto/create-users.dto";
import { UpdateUsersDTO } from "./dto/update-users.dto";
import { UpdatePatchUsersDTO } from "./dto/update-patch-users.dto";
import { cadastros_carros, favorite_cars, users } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ name, email, password }: CreateUsersDTO) {
    return this.prisma.users.create({
      data: {
        name,
        email,
        password
      }
    });
  }

  async list() {
    return this.prisma.users.findMany();
  }

  async show(id:number) {
    return this.prisma.users.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, data: UpdateUsersDTO) {
    return this.prisma.users.update({
      data,
      where: {
        id
      }
    });
  }

  async updatePartial(id: number, { name, email, password }: UpdatePatchUsersDTO) {
    const data: any = {}

    if (!(await this.show(id))) {
      throw new NotFoundException(`Usuário ${ id } não encontrado.`);
    }

    if (name) {
      data.name = name;
    }

    if (email) {
      data.email = email;
    }

    if (password) {
      data.password = password;
    }

    return this.prisma.users.update({
      data,
      where: {
        id,
      }
    });
  }

  async delete(id: number) {
    if (!(await this.show(id))) {
      throw new NotFoundException(`Usuário ${ id } não encontrado`);
    }
    return this.prisma.users.delete({
      where: {
        id,
      }
    });
  }

  async favoriteCar(userId: number, carId: number): Promise<favorite_cars> {
    return this.prisma.favorite_cars.create({
      data: {
        userId,
        carId
      }
    });
  }

  async unFavoriteCar(userId: number, carId: number): Promise<void> {
    await this.prisma.favorite_cars.deleteMany({
      where: {
        userId,
        carId
      }
    });
  }

  async getFavoriteCars(userId: number): Promise<number[]> {
    const favorites = await this.prisma.favorite_cars.findMany({
      where: {
        userId,
      },
      select: {
        carId: true
      }  
    });
    return favorites.map((favorite) => favorite.carId);
  }

  async getUserWithFavoriteCars(userId: number): Promise<{ user: users, favoriteCars: cadastros_carros[] }> {
    const user = await this.prisma.users.findUnique({
      where: {
        id: userId,
      }
    });

    const favoriteCars = await this.prisma.favorite_cars.findMany({
      where: {
        userId,
      },
      include: {
        car: true
      },
    }).then(favorites => favorites.map(favorite => favorite.car));

    return { user, favoriteCars };
  }
}