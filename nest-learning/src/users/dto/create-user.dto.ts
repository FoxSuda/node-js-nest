import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@gmail.com', description: 'Email'})
    @IsString({message: 'Must be a string'})
    @IsEmail({}, {message: "Invalid email"})
    readonly email: string;

    @ApiProperty({example: '123456', description: 'Password'})
    @IsString({message: 'Must be a string'})
    @Length(4, 16, {message: 'Must be more than 4 and less than 16'})
    readonly password: string;

}