import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Category } from "../schemas/book.schema"

export class CreateBookDto{
    @IsNotEmpty()
    @IsString()
    readonly title:string;
    @IsNotEmpty()
    @IsString()
    readonly description:string;
    @IsNotEmpty()
    @IsNumber()
    readonly price:number;
    @IsNotEmpty()
    @IsString()
    readonly author:string;
    @IsNotEmpty()
    @IsEnum(Category,{message:'please enter the correct category'})
    readonly category:Category;
}