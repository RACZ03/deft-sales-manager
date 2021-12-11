import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductI } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL = environment.URL;
  public $products: ProductI[] = []

  constructor(
    private http: HttpClient
  ) { 
    this.getAll();
  }

  getAll() {
    // return this.http.get( `${ this.URL }/presentation`);
    const data: ProductI[] = [
      { id: 1, code: 20012, name: 'product 1', description: 'description', stock: 5, presentationId: null, purchasePrice: 50, salePrice: 61,
        wholesalePrice: null, discount: 2, expiration: null, expirationDate: null, warranty: null, duration: null, supplierId: 1, categoryId:4,
        modelId: null, markId: null, status: true, createdAt: 1, updatedAt: 1 },
      { id: 2, code: 22253, name: 'product 2', description: 'description', stock: 10, presentationId: null, purchasePrice: 55, salePrice: 78,
        wholesalePrice: null, discount: 3, expiration: null, expirationDate: null, warranty: null, duration: null, supplierId: 2, categoryId:1,
        modelId: null, markId: null, status: true, createdAt: 1, updatedAt: 1 },
      { id: 3, code: 1253, name: 'product 3', description: 'description', stock: 3, presentationId: null, purchasePrice: 5, salePrice: 9,
        wholesalePrice: null, discount: 4, expiration: null, expirationDate: null, warranty: null, duration: null, supplierId: 3, categoryId:3,
        modelId: null, markId: null, status: true, createdAt: 1, updatedAt: 1 },
      { id: 4, code: 51253, name: 'product 4', description: 'description', stock: 2, presentationId: null, purchasePrice: 10, salePrice: 16,
        wholesalePrice: null, discount: 5, expiration: null, expirationDate: null, warranty: null, duration: null, supplierId: 4, categoryId:2,
        modelId: null, markId: null, status: true, createdAt: 1, updatedAt: 1 },
    ];
    return this.$products = [...data];
  }

  public getCode(): string {
    // Replace code by a query to the api, from the last code assigned
    let code = Math.floor(10000000 + Math.random() * 90000000).toString()
    return code;
  }

  findProduct(code: string): Observable<any> {
    return;
  }

  createAndUpdate(product: ProductI): Observable<any> {
    let resp = {
      code: 200,
      message: 'Success'
    } 
    if ( product.id === null || product.id === undefined ) {
      product.id = this.$products.length + 1;
      this.$products.push(product);
    } else {
      // update
      const indice = this.$products.findIndex( e => e.id === product.id);
      if ( indice > 0) {
        this.$products[indice] = product;
      }
    }

    // example
    return new Observable( subscribe => subscribe.next(resp) );
  }

  delete(code: string): Observable<any> {
    let resp = {
      code: 200,
      message: 'Success'
    } 
    // example
    return new Observable( subscribe => subscribe.next(resp) );
  }

  uploadImage(): Observable<any> {
    return;
  }

  deleteImage(): Observable<any> {
    return;
  }

}
