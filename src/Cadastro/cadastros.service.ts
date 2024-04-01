import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCadastrosDTO } from "./dto/create-cadastros.dto";
import { UpdateCadastrosDTO } from "./dto/update-cadastros.dto";
import { UpdatePatchCadastrosDTO } from "./dto/update-patch-cadastros.dto";

@Injectable()
export class CadastrosService{
  constructor(private readonly prisma: PrismaService) {
    
  }

  async create({ brand, model, yearModel, yearManufacturing, version, color, kmWheelsets, price, images }: CreateCadastrosDTO) {
    return this.prisma.cadastros_carros.create({
      data: {
        brand,
        model,
        yearModel,
        yearManufacturing,
        version,
        color,
        kmWheelsets,
        price,
        images,
      }
    });
  }

  async list() {
    return this.prisma.cadastros_carros.findMany();
  }

  async show(id: number) {
    return this.prisma.cadastros_carros.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, data: UpdateCadastrosDTO) {
    return this.prisma.cadastros_carros.update({
      data,
      where: {
        id,
      }
    });
  }

  async updatePartial(id: number, { brand, model, yearModel, yearManufacturing, version, color, kmWheelsets, price }: UpdatePatchCadastrosDTO) {
    const data: any = {}

    if (!(await this.show(id))) {
      throw new NotFoundException(`Usuário ${ id } não encontrado.`)
    }

    if (brand) {
      data.brand = brand;
    }

    if (model) {
      data.model = model;
    }

    if (yearModel) {
      data.yearModel = yearModel;
    }

    if (yearManufacturing) {
      data.yearManufacturing = yearManufacturing;
    }

    if (version) {
      data.version = version;
    }

    if (color) {
      data.color = color;
    }

    if (kmWheelsets) {
      data.kmWheelsets = kmWheelsets;
    }

    if (price) {
      data.price = price;
    }

    return this.prisma.cadastros_carros.update({
      data,
      where: {
        id,
      }
    });
  }

  async delete(id: number) {
    if (!(await this.show(id))) {
      throw new NotFoundException(`Usuário ${ id } não encontrado`)
    }
    return this.prisma.cadastros_carros.delete({
      where: {
        id,
      }
    });
  }

}