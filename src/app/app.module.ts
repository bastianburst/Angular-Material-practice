import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatSlideToggleModule, MatButtonModule, MatTableModule, MatInputModule, MatSelectModule, MatPaginatorModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { CategoriesModule } from './categories/categories.module';
import { AppSettings } from './app.config';
import { CategoriesService } from './categories/categories.service';
import { CategoriesListComponent } from './categories/categorieslist/categorieslist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './encabezado/app.encabezado';
import { FooterComponent } from './piepagina/app.piepagina';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';
import { BooksListComponent } from './books/bookslistar/books.component';
import { BooksCreateComponent } from './books/bookscrear/bookscrear.component';
import { BooksEditComponent } from './books/bookseditar/bookseditar.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesListComponent,
    BooksListComponent,
    BooksCreateComponent,
    BooksEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    CategoriesModule,
    //AppSettings,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatButtonModule,
    BooksModule
  ],
  providers: [CategoriesService, BooksService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
