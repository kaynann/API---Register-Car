import { PartialType } from "@nestjs/mapped-types";
import { CreateCadastrosDTO } from "./create-cadastros.dto";

export class UpdatePatchCadastrosDTO extends PartialType(CreateCadastrosDTO) {}