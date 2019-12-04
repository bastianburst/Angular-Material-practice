import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriesModule } from '../Categories/categories.module';
import { AppSettings } from '../app.config';
@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    constructor(private http: HttpClient) { }
    Url = AppSettings.API_ENDPOINT + "/categories";

    getCategories() {
        return this.http.get<CategoriesModule[]>(this.Url);
    }
}