import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PresentationI } from '../interfaces/presentation';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  private URL = environment.URL;
  public $presentations: PresentationI[] = []

  constructor(
    private http: HttpClient
  ) { 
    this.getAll();
  }

  getAll() {
    // return this.http.get( `${ this.URL }/presentation`);
    const data: PresentationI[] = [
      { id: 1, name: 'presentacion 1', status: true, createdAt: 1, updatedAt: 1 },
      { id: 2, name: 'presentacion 2', status: true, createdAt: 1, updatedAt: 1 },
      { id: 3, name: 'presentacion 3', status: true, createdAt: 1, updatedAt: 1 },
      { id: 4, name: 'presentacion 4', status: true, createdAt: 1, updatedAt: 1 },
    ];
    this.$presentations = [...data];
  }

}
