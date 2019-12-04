import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books/books.service';
import { Router } from '@angular/router';
import { BooksModule } from '../../books/books.module';
import { CategoriesService } from '../../categories/categories.service';
import { CategoriesModule } from '../../categories/categories.module';


@Component({
    selector: 'app-bookcrear',
    templateUrl: './bookscrear.component.html',
    styleUrls: ['./bookscrear.component.scss']

})

export class BooksCreateComponent implements OnInit{
catego =[];
books:BooksModule=new BooksModule();
categor: CategoriesModule = new CategoriesModule();
constructor(private router:Router, private service:BooksService, private cat: CategoriesService, private categories: CategoriesModule) {}


ngOnInit(){
    this.cat.getCategories().subscribe(data =>{
    this.catego = data;
    console.log(data);
    })
}


Save(){
    this.books.estado = true;
    this.books.idcat = this.categor;
    console.log(this.books);

    this.service.createBooks(this.books).subscribe(data=>{
    alert("Guardado");
    this.router.navigate(["bookslistar"]);
    });

}

}
