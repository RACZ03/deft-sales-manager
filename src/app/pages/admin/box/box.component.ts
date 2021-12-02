import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

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
      edit: true,     //  if you want to remove edit button
      delete: true, //  if you want to remove delete button
      position: 'right'
    },
    columns: {
      id: {
        title: 'Id',
        type: 'number'
      },
      number: {
        title: 'Número',
        type: 'string',
      },
      name: {
        title: 'Nombre',
        type: 'string',
      },
      cash: {
        title: 'Efectivo',
        type: 'string',
      },
      status: {
        title: 'Estado',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  public data: any[] = [{
    id: 1,
    number: '1164921212',
    name: 'Caja 1',
    cash: 1952,
    status: 'Activa'
  },{
    id: 2,
    number: '1164921212',
    name: 'Caja 2',
    cash: 1500,
    status: 'Activa'
  }];
  constructor() {
    this.source.load(this.data);
  }

  ngOnInit() {}

  onDelete(e): void {
    console.log(e);
  }

  addBox( e? ) {
    
    this.showModal = !this.showModal;
    console.log(e);
  }

}
