import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Book} from './schemas/book.schema'
import * as mongoose from 'mongoose';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel:mongoose.Model<Book>
    ){}
    async findAll():Promise<Book[]>{
        const books = await this.bookModel.find();
        return books;
    }
    async create(book:Book):Promise<Book>{
        const res = await this.bookModel.create(book);
        return res;
    }
    async findById(id: string): Promise<Book> {
        let res: Book;
        try {
            res = await this.bookModel.findById(id);
        } catch (error) {
            throw new NotFoundException("Invalid ID format");
        }
        if (!res) {
            throw new NotFoundException("Record not found");
        }
        return res;
    }
    async findAndUpdate(id:string, book:Book): Promise<Book>{
        return  await this.bookModel.findByIdAndUpdate(id,book,{
                new:true,
                runValidators:true
            });
    }
    async deleteById(id:string):Promise<Book>{
        return await this.bookModel.findByIdAndDelete(id);
    }
}
