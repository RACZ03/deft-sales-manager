import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SupplierI } from '../interfaces/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private URL = environment.URL;
  public $suppliers: SupplierI[] = []

  constructor(
    private http: HttpClient
  ) { 
    this.getAll();
  }

  getAll() {
    // return this.http.get( `${ this.URL }/presentation`);
    const data: SupplierI[] = [
      { id: 1, documentType: '', numberDoc: '', businessName: 'supplier 1', address: '', sellerName: '', surname:'' , status: true, createdAt: 1, updatedAt: 1 },
      { id: 2, documentType: '', numberDoc: '', businessName: 'supplier 2', address: '', sellerName: '', surname:'' , status: true, createdAt: 1, updatedAt: 1 },
      { id: 3, documentType: '', numberDoc: '', businessName: 'supplier 3', address: '', sellerName: '', surname:'' , status: true, createdAt: 1, updatedAt: 1 },
      { id: 4, documentType: '', numberDoc: '', businessName: 'supplier 4', address: '', sellerName: '', surname:'' , status: true, createdAt: 1, updatedAt: 1 },
    ];
    this.$suppliers = [...data];
  }

}
