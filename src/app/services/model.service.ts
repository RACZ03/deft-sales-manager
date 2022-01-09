import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ModelI, DataModelI } from '../interfaces/model';
import { ResponseI } from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class ModelService {

  private URL = environment.URL;
  public $models: DataModelI[] = [];

  constructor(
    private http: HttpClient,
  ) {
    this.getAll(false);
  }

  getAll(band: boolean) { // Remove flag when integrating the api
    // return this.http.get( `${ this.URL }/mark`);
    if ( band ) {
      return this.$models;
    }
    const data: DataModelI[] = [
      { id: 1, name: 'model 1', status: true, statusText: 'Activo', createdAt: 1, updatedAt: 1 },
      { id: 2, name: 'model 2', status: true, statusText: 'Activo', createdAt: 1, updatedAt: 1 },
      { id: 3, name: 'model 3', status: true, statusText: 'Activo', createdAt: 1, updatedAt: 1 },
      { id: 4, name: 'model 4', status: true, statusText: 'Activo', createdAt: 1, updatedAt: 1 },
    ];
    return this.$models = [...data];
  }

  createAndUpdate(model: ModelI): Observable<any> {
    const resp: ResponseI = {
      code: 200,
      message: 'Success',
      data: [],
    };
    const statusText: string = model.status ? 'Activo' : 'Inactivo';
    if ( model.id === null || model.id === undefined ) {
      model.id = this.$models.length + 1;
      this.$models.push({ ...model, statusText});
    } else {
      // update
      const indice = this.$models.findIndex( e => e.id === model.id);
      if ( indice >= 0) {
        this.$models[indice] = { ...model, statusText};
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
    const indice = this.$models.findIndex( e => e.id === id);
    if ( indice >= 0) {
      const status =  this.$models[indice].status;
      this.$models[indice].statusText = status ? 'Inactivo' : 'Activo';
      this.$models[indice].status = !status;
    }
    // example
    return new Observable( subscribe => subscribe.next(resp) );
  }
}
