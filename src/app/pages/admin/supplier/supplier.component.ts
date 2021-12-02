import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

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
      columnTitle: 'Actions',
      edit: true,     //  if you want to remove edit button
      delete: true, //  if you want to remove delete button
      position: 'right'
    },
    columns: {
      id: {
        title: 'Id',
        type: 'number'
      },
      name: {
        title: 'Proveedor',
        type: 'string',
      },
      seller: {
        title: 'Encargado',
        type: 'string',
      },
      phone: {
        title: 'Teléfono',
        type: 'string',
      },
      status: {
        title: 'Estado',
        type: 'number',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  public data: any[] = [{
    id: 1,
    name: 'SA. NULL',
    seller: 'Raul Larios',
    phone: '2255 8965',
    status: 'Activo'
  },{
    id: 3,
    name: 'Not null',
    seller: 'Mario González',
    phone: '2255 4575',
    status: 'Activo'
  }];
  constructor() {
    this.source.load(this.data);
  }

  ngOnInit() {}

  onDelete(event): void {
    console.log('Delete')
  }

  addSupplier( e? ) {
    this.showModal = !this.showModal;

    console.log(e);
  }
}
