import { Component, OnInit } from '@angular/core';
import { Book } from './books.model';
import { BookService } from './book.service';

@Component({
    // selector: 'app-book',
    templateUrl: 'books.component.html'
})

export class BooksComponent implements OnInit {

    constructor(private bookService: BookService) { }

    books: Book[];

    ngOnInit(): void {
        this.books = this.bookService.getBooks();
    }
}
