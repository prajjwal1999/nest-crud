import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { BookService } from './book.service';
import {Book} from './schemas/book.schema'
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BookController {
    constructor(private bookService:BookService){}

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.bookService.findAll();
    }
    @Post()
    async createBooks(
        @Body() book: CreateBookDto
    ):Promise<Book>{
        return this.bookService.create(book);
    }
    @Get(':id')
    async getBookById( @Param('id') id:string):Promise<Book>{
        return this.bookService.findById(id);
    }
    @Put(':id')
    async updateBook( @Param('id') id:string,
        @Body() book: CreateBookDto
    ):Promise<Book>{
        return this.bookService.findAndUpdate(id,book);
    }
    @Delete(':id')
    async deleteBook(@Param('id') id:string):Promise<Book>{
        return this.bookService.deleteById(id);
    }
    
}
