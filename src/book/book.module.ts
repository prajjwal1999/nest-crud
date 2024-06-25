import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { BookScehma } from './schemas/book.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Book',schema:BookScehma}])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
