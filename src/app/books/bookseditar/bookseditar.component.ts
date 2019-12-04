import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { BooksModule } from '../books.module';
import { CategoriesModule } from '../../categories/categories.module';
import { CategoriesService } from '../../categories/categories.service';
@Component({
    selector: 'app-booksedit',
    templateUrl: './bookseditar.component.html',
    styleUrls: ['./bookseditar.component.scss']
})

export class BooksEditComponent implements OnInit {
    books: BooksModule = new BooksModule();
    categor: CategoriesModule = new CategoriesModule();
    constructor(private router: Router, private service: BooksService, private service2: CategoriesService) { }

    categories = [];
    color = 'accent';


    ngOnInit() {
        this.service2.getCategories().subscribe(data => {
            this.categories = data;
        });
        this.getBook();
    }

    getBook() {
        let id = localStorage.getItem("idbook");
        this.service.getBooksId(+id).subscribe(data => {
            this.books = data;
        });

    }

    Update() {
        console.log(this.categor.idcat);
        if (this.categor.idcat != null) {
            this.books.idcat = this.categor;
        }
        console.log(this.books);
        this.service.updateBooks(this.books).subscribe(data => {
            this.books = data;
            alert("Se actualizó con exito");
            this.router.navigate(["bookslistar"]);
        })
    }
}