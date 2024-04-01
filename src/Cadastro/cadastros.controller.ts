import { Body, Controller, Post, Get, Param, ParseIntPipe, Put, Patch, ParseFloatPipe, Delete } from "@nestjs/common";
import { CreateCadastrosDTO } from "./dto/create-cadastros.dto";
import { CadastrosService } from "./cadastros.service";
import { UpdateCadastrosDTO } from "./dto/update-cadastros.dto";
import { UpdatePatchCadastrosDTO } from "./dto/update-patch-cadastros.dto";

@Controller('cadastros')
export class CadastrosControllers {
  constructor(private readonly cadastrosService: CadastrosService) {}
  
  @Post()
  async create(@Body() data: CreateCadastrosDTO) {
    return this.cadastrosService.create(data);
  }

  @Get()
  async read() {
    return this.cadastrosService.list();
  }

  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) id: number) {
    return this.cadastrosService.show(id);
  }

  @Put(':id')
  async update(@Body() data: UpdateCadastrosDTO, @Param('id', ParseIntPipe) id: number) {
    return this.cadastrosService.update(id, data)
  }

  @Patch(':id')
  async updatePartial(@Body() data: UpdatePatchCadastrosDTO, @Param('id', ParseFloatPipe) id: number) {
    return this.cadastrosService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.cadastrosService.delete(id);
  }
}