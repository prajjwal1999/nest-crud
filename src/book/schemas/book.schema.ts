import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category{
    ADVENTURE='Adventure',CLASSIC='Classics',CRIME='Crime',FANTASY='Fantasy'
}

@Schema({
    timestamps:true
})
export class Book{
  
    @Prop()
  title:string;

  @Prop()
  description:string;

  @Prop()
  author:string;

  @Prop()
  price:number;

  @Prop()
  category:Category;


}

export const BookScehma = SchemaFactory.createForClass(Book);