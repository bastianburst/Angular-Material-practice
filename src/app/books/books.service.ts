import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksModule } from '../books/books.module';
import { AppSettings } from '../app.config';
@Injectable({
    providedIn: 'root'
})
export class BooksService {
    constructor(private http: HttpClient) { }
    Url = AppSettings.API_ENDPOINT + "/books";

    getBooks() {
        return this.http.get<BooksModule[]>(this.Url);
    }

    createBooks(book: BooksModule) {
        return this.http.post<BooksModule>(this.Url, book);
    }

    getBooksId(id: number) {
        return this.http.get<BooksModule>(this.Url + "/" + id);
    }

    updateBooks(books: BooksModule) {
        //Decimos que peticion es, luego la Url a apuntas, al ser un update
        //le pasamos el id que queremos editar, y el objeto que enviamos
        return this.http.put<BooksModule>(this.Url + "/" + books.idbook, books);
    }
    /*
        deleteBooks(id:number){
            return this.http.delete<BooksModule>(this.Url + "/" + id);
        }
    */
    //Podriamos enviar solo el id o el elemento completo asi
    deleteBooks(books: BooksModule) {
        return this.http.delete<BooksModule>(this.Url + "/" + books.idbook);
    }
}