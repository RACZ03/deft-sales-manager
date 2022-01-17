import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource, Ng2SmartTableComponent } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import { NewCategoryComponent } from './new/new.component';
import { CategoryI } from '../../../interfaces/category';
import { CategoryService } from '../../../services/category.service';
import { ModalDeleteComponent } from '../../../components/modal-delete/modal-delete.component';
import { ToastrService } from '../../../services/toastr.service';

@Component({
  selector: 'ngx-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  @ViewChild('tableCategory') table: Ng2SmartTableComponent;

  public settings = {
    sort: true,
    // hideSubHeader: true,
    mode: 'external',
    edit: {
      editButtonContent: '<i class="nb-edit"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    pager: {
      display: true,
      perPage: 10,
    },
    actions: {
      title: 'Acciones',
      columnTitle: 'Acciones',
      add: false,
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
      statusText: {
        title: 'Estado',
        type: 'string',
      }
    },
  };

  public source: LocalDataSource = new LocalDataSource();
  public data: CategoryI[] = [];

  constructor(
    private dialogSvc: NbDialogService,
    private toastrSVC: ToastrService,
    private categorySvc: CategoryService,
  ) {
    this.loadTable(false);
  }

  ngOnInit() {
    setTimeout(() => { // first row pick remover
      this.table.grid.dataSet.deselectAll();
    }, 100);
  }

  loadTable(band: boolean) { // Remove flag when integrating the api
    this.data = this.categorySvc.getAll(band);
    this.source.load(this.data);
  }

  onDelete(event): void {
    const id = event['data'].id;
    const question: string = event['data'].status ? 'Desea desactivar la categoría' : 'Desea activar la categoría';
    const message: string = event['data'].status ? 'Categoría desactivada correctamente' : 'Categoría habilitada correctamente';
    this.dialogSvc.open(ModalDeleteComponent,
                    {
                      context: {
                        question,
                      },
                    },
                  )
                  .onClose.subscribe(resp => {
                    if ( resp ) {
                      this.categorySvc.delete(id).subscribe( resp => {
                        if ( resp.code === 200) {
                          this.toastrSVC.showToast('success', 'topR', 'Accion exitosa', 3000, message);
                          this.loadTable(true);
                        } else {
                          this.toastrSVC.showToast('danger', 'topR', 'Error', 3000, 'No se pudo activa/desactivar la categoría');
                        }
                      });
                    }
                  });

  }

  openModalNew( e? ) {
    const category = e?.data;
    this.dialogSvc.open(NewCategoryComponent, {
      context: {
        category,
      },
    }).onClose.subscribe( resp => {
      this.loadTable(true);
    });
  }


}
