import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books/books.service';
import { Router } from '@angular/router';
import { BooksModule } from '../../books/books.module';


@Component({
    selector: 'app-booklist',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss']

})

export class BooksListComponent implements OnInit {

    books = [];
    displayedColumns = ["idbook", "titulo", "descripcion", "editorial", "fecha", "estado", "idcat", "accion", "accion2"];
    constructor(private service: BooksService, private router: Router, private book: BooksModule) { }

    ngOnInit() {
        this.service.getBooks().subscribe(data => {
            this.books = data;
            console.log(data);
        });
    }


    GoEdit(id) {
        console.log(id);
        localStorage.setItem("idbook", id.toString());
        this.router.navigate(["booksedit"]);
    }
    /*
        Delete(id){
            this.service.deleteBooks(id).subscribe(data=>{
                alert("Eliminado");
                this.books = this.books.filter(p=>p!==books);
            })
        }
    
      */
    //Podriamos enviar solo el id o el elemento completo asi, con este tenemos la ventaja de que podemos
    //refrescar la data despues
    Delete(book: BooksModule) {
        this.service.deleteBooks(book).subscribe(data => {
            alert("Eliminado");
            this.books = this.books.filter(p => p !== book);
        })
    }
}

