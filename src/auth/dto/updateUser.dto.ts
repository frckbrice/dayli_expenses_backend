import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUser {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
