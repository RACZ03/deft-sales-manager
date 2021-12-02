import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

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
      ubication: {
        title: 'Ubicación',
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
    name: 'Categoria 1',
    ubication: 'Pasillo 2',
    status: 'Activa'
  },{
    id: 2,
    name: 'Categoria 2',
    ubication: 'Pasillo 1',
    status: 'Activa'
  },{
    id: 3,
    name: 'Categoria 3',
    ubication: 'Pasillo 1',
    status: 'Activa'
  }];
  constructor() {
    
    this.source.load(this.data);
  }

  ngOnInit() {}

  onDelete(event): void {
    console.log('Delete')
  }

  addCategory( e? ) {
    this.showModal = !this.showModal;

    console.log(e);
  }


}
