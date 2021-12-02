import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

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
        title: 'ID',
        type: 'number'
      },
      position: {
        title: 'Cargo',
        type: 'string',
      },
      box: {
        title: 'Caja',
        type: 'string',
      },
      user: {
        title: 'Usuario',
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
    position: 'Cajero',
    box: 'Caja 1',
    user: 'Mary05',
    status: 'Activo'
  },{
    id: 2,
    position: 'Cajero',
    box: 'Caja e',
    user: 'JohnConor',
    status: 'Activo'
  }];
  constructor() {
    this.source.load(this.data);
  }

  ngOnInit() {}

  onDelete(event): void {
    console.log('Delete')
  }

  addUser( e? ) {
    this.showModal = !this.showModal;

    console.log(e);
  }

}
