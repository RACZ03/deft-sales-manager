import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { MarkI } from '../interfaces/mark';

@Injectable({
  providedIn: 'root'
})
export class MarkService {
  
  private URL = environment.URL;
  public $marks: MarkI[] = []

  constructor(
    private http: HttpClient
  ) { 
    this.getAll();
  }

  getAll() {
    // return this.http.get( `${ this.URL }/mark`);
    const data: MarkI[] = [
      { id: 1, name: 'mark 1', status: true, createdAt: 1, updatedAt: 1 },
      { id: 2, name: 'mark 2', status: true, createdAt: 1, updatedAt: 1 },
      { id: 3, name: 'mark 3', status: true, createdAt: 1, updatedAt: 1 },
      { id: 4, name: 'mark 4', status: true, createdAt: 1, updatedAt: 1 },
    ];
    this.$marks = [...data];
  }
  
}
