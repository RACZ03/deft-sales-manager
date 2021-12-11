import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CategoryI } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private URL = environment.URL;
  public $categories: CategoryI[] = []

  constructor(
    private http: HttpClient
  ) { 
    this.getAll();
  }

  getAll() {
    // return this.http.get( `${ this.URL }/presentation`);
    const data: CategoryI[] = [
      { id: 1, name: 'category 1', status: true, createdAt: 1, updatedAt: 1 },
      { id: 2, name: 'category 2', status: true, createdAt: 1, updatedAt: 1 },
      { id: 3, name: 'category 3', status: true, createdAt: 1, updatedAt: 1 },
      { id: 4, name: 'category 4', status: true, createdAt: 1, updatedAt: 1 },
    ];
    this.$categories = [...data];
  }

}
