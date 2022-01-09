import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CategoryI, DataCategoryI } from '../interfaces/category';
import { ResponseI } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private URL = environment.URL;
  public $categories: DataCategoryI[] = []

  constructor(
    private http: HttpClient
  ) { 
    this.getAll(false);
  }

  getAll(band: boolean) { // Remove flag when integrating the api
    // return this.http.get( `${ this.URL }/categories`);
    if ( band ) {
      return this.$categories;
    }
    const data: DataCategoryI[] = [
      { id: 1, name: 'category 1', ubication: 'Pasillo 1', status: true, statusText: 'Activo', createdAt: 1, updatedAt: 1 },
      { id: 2, name: 'category 2', ubication: 'Pasillo 2', status: true, statusText: 'Activo', createdAt: 1, updatedAt: 1 },
      { id: 3, name: 'category 3', ubication: 'Pasillo 3', status: true, statusText: 'Activo', createdAt: 1, updatedAt: 1 },
      { id: 4, name: 'category 4', ubication: 'Pasillo 4', status: true, statusText: 'Activo', createdAt: 1, updatedAt: 1 },
      { id: 5, name: 'category 5', ubication: 'Pasillo 3', status: true, statusText: 'Activo', createdAt: 1, updatedAt: 1 },
      { id: 6, name: 'category 6', ubication: 'Pasillo 2', status: true, statusText: 'Activo', createdAt: 1, updatedAt: 1 },
    ];
    return this.$categories = [...data];
  }

  createAndUpdate(category: CategoryI): Observable<any> {
    const resp: ResponseI = {
      code: 200,
      message: 'Success',
      data: [],
    };
    const statusText: string = category.status ? 'Activo' : 'Inactivo'; 
    if ( category.id === null || category.id === undefined ) {
      category.id = this.$categories.length + 1;
      this.$categories.push({ ...category, statusText});
    } else {
      // update
      const indice = this.$categories.findIndex( e => e.id === category.id);
      if ( indice >= 0) {
        this.$categories[indice] = { ...category, statusText};
      }
    }

    // example
    return new Observable( subscribe => subscribe.next(resp) );
  }

  delete(id: number): Observable<any> {
    const resp = {
      code: 200,
      message: 'Success',
      data: [],
    };
    const indice = this.$categories.findIndex( e => e.id === id);
    if ( indice >= 0) {
      this.$categories[indice].statusText = 'Inactivo';
    }
    // example
    return new Observable( subscribe => subscribe.next(resp) );
  }

}
