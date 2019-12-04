import { NgModule, ɵbypassSanitizationTrustStyle } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesModule } from '../categories/categories.module';

@NgModule({
    declarations : [],
    imports:[
        CommonModule
    ]
})

export class BooksModule{
    idbook:number;
    titulo: String;
    descripcion :String;
    editorial:String;
    fecha:String;
    estado:Boolean;
    idcat:CategoriesModule;
}