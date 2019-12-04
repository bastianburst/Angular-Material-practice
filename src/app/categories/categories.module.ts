import { NgModule, ɵbypassSanitizationTrustStyle } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})

export class CategoriesModule{
    idcat:number;
    descripcion: String;
    estado: Boolean = true;
}