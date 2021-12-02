import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public showModal: boolean = false;
  public settings = {
    sort: true,
    hideSubHeader: true,
    mode: 'external',
    edit: {
      editButtonContent: '<i class="nb-edit"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      title: 'Acciones',
      add: false,      //  if you want to remove add button
      edit: true,     //  if you want to remove edit button
      delete: true, //  if you want to remove delete button
      position: 'right'
    },
    columns: {
      id: {
        title: 'Id',
        type: 'number'
      },
      code: {
        title: 'Codigo',
        type: 'string',
      },
      name: {
        title: 'Nombre',
        type: 'string',
      },
      price: {
        title: 'Precio',
        type: 'number',
      },
      discount: {
        title: 'Descuento',
        type: 'number',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  public data: any[] = [{
    id: 1,
    code: '1164921212',
    name: 'Test',
    price: 28.6,
    discount: 2.5
  },{
    id: 2,
    code: '1164921212',
    name: 'Test',
    price: 28.6,
    discount: 2.5
  }];

  constructor() {
    
    this.source.load(this.data);
  }

  ngOnInit() {}

  onDelete(e): void {
    console.log(e);
  }

  addProduct(e?) {
    
    this.showModal = !this.showModal;
    console.log(e);
    
  }
}
