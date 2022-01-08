import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ModelI } from '../interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  
  private URL = environment.URL;
  public $models: ModelI[] = []

  constructor(
    private http: HttpClient
  ) { 
    this.getAll();
  }

  getAll() {
    // return this.http.get( `${ this.URL }/mark`);
    const data: ModelI[] = [
      { id: 1, name: 'model 1', status: true, createdAt: 1, updatedAt: 1 },
      { id: 2, name: 'model 2', status: true, createdAt: 1, updatedAt: 1 },
      { id: 3, name: 'model 3', status: true, createdAt: 1, updatedAt: 1 },
      { id: 4, name: 'model 4', status: true, createdAt: 1, updatedAt: 1 },
    ];
    this.$models = [...data];
  }
  
}
