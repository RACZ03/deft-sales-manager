import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

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
        title: 'Nombre',
        type: 'string',
      },
      surname: {
        title: 'Apellido',
        type: 'string',
      },
      phone: {
        title: 'Número',
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
    name: 'Luis',
    surname: 'Mejia',
    phone: '75896589',
    status: 'Activo'
  },{
    id: 2,
    name: 'Maria',
    surname: 'Castillo',
    phone: '89858586',
    status: 'Activo'
  }];

  constructor() {
    this.source.load(this.data);
  }

  ngOnInit() {}

  onDelete(event): void {
    console.log('Delete')
  }

  addCustomer( e? ) {
    this.showModal = !this.showModal;

    console.log(e);
  }

}
