import {  IsBoolean, IsInt, IsOptional, IsString } from "class-validator"
import { Prisma } from "@prisma/client";

export class CreateCadastrosDTO {
  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsString()
  yearModel: string;

  @IsString()
  yearManufacturing: string;

  @IsString()
  version: string;

  @IsString()
  color: string;

  @IsString()
  kmWheelsets: string;

  @IsString()
  price: string;

  @IsString()
  images: string
}