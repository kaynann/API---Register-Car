import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUsersDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 6,
    minLowercase: 0,
    minUppercase: 1,
    minNumbers: 4,
    minSymbols: 1
  })
  password: string;
}