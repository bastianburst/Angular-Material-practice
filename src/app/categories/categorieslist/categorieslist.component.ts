import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../categories/categories.service';
import { Router } from '@angular/router';
import { CategoriesModule } from '../../Categories/categories.module';
import {PageEvent} from '@angular/material/paginator';


@Component({
    selector: 'app-categlistar',
    templateUrl: './categorieslist.component.html',
    styleUrls: ['./categorieslist.component.scss']
})

export class CategoriesListComponent implements OnInit {


    categories = [];

pageEvent: PageEvent;
datasource: null;
pageIndex:number;
pageSize:number;
length:number;

    displayedColumns = ["idcat", "descripcion", "estado"];
    constructor(private service: CategoriesService, private router: Router) { }

    ngOnInit() {

    //this.getServerData(null);
       this.service.getCategories().subscribe(data => {
            this.categories = data;
            console.log(data);
        });
    }
/*
    public getServerData(event?:PageEvent){
  this.service.getCategories().subscribe(
    data =>{
        this.categories = data;
        this.datasource = data;
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
        this.length = length;
      });
  return event;
}
*/


}