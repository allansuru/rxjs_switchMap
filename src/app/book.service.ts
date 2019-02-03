import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    bookUrl = '/api/books/';

    constructor(private http: HttpClient) { }

    getBook(id: number): Observable<Book> {
        const URL = this.bookUrl + id;
      return this.http.get<Book>(URL).pipe(
          catchError(err => of(null))
      );
    }
}
