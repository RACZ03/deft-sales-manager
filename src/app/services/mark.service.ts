import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseI } from '../interfaces/response';
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
    this.getAll(false);
  }

  getAll(band: boolean) {
    // return this.http.get( `${ this.URL }/mark`);
    if (band) {
      return this.$marks;
    }
    const data: MarkI[] = [
      { id: 1, name: 'mark 1', status: true, createdAt: 1, updatedAt: 1 },
      { id: 2, name: 'mark 2', status: true, createdAt: 1, updatedAt: 1 },
      { id: 3, name: 'mark 3', status: true, createdAt: 1, updatedAt: 1 },
      { id: 4, name: 'mark 4', status: true, createdAt: 1, updatedAt: 1 },
    ];
    return this.$marks = [...data];
  }

  changeStatus(id: Number): Observable<any> {
    const resp: ResponseI = {
      code: 200,
      message: 'Success',
      data: [],
    };
    // change
    const brand = this.$marks.find(e => e.id === id);
    brand.status = !brand.status;

    // example
    return new Observable(subscribe => subscribe.next(resp));
  }


  createAndUpdate(mark: MarkI): Observable<any> {
    const resp: ResponseI = {
      code: 200,
      message: 'Success',
      data: [],
    };
    if (mark.id === null || mark.id === undefined) {
      mark.id = this.$marks.length + 1;
      //setear estado por defecto cuando se crea nueva marca
      mark.status = true;
      this.$marks.push(mark);
    } else {
      // update
      const indice = this.$marks.findIndex(e => e.id === mark.id);
      if (indice >= 0) {
        this.$marks[indice] = { ...mark };
      }
    }

    // example
    return new Observable(subscribe => subscribe.next(resp));
  }

  delete(id: number): Observable<any> {
    const resp = {
      code: 200,
      message: 'Success',
      data: [],
    };
    const newData = this.$marks.filter(e => e.id !== id);
    this.$marks = [...newData];
    // example
    return new Observable(subscribe => subscribe.next(resp));
  }




}
