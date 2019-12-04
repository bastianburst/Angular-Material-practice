import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesListComponent } from './categories/categorieslist/categorieslist.component';
import { BooksListComponent } from './books/bookslistar/books.component';
import { BooksCreateComponent } from './books/bookscrear/bookscrear.component';
import { BooksEditComponent } from './books/bookseditar/bookseditar.component';


const routes: Routes = [
  { path: 'categoriaslistar', component: CategoriesListComponent },
  { path: 'bookslistar', component: BooksListComponent },
  { path: 'bookscrear', component: BooksCreateComponent },
  { path: 'booksedit', component: BooksEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
