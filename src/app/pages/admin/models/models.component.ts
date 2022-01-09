import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource, Ng2SmartTableComponent } from 'ng2-smart-table';
import { ModelI } from '../../../interfaces/model';
import { ToastrService } from '../../../services/toastr.service';
import { ModelService } from '../../../services/model.service';
import { ModalDeleteComponent } from '../../../components/modal-delete/modal-delete.component';
import { NewModelComponent } from './new/new.component';

@Component({
  selector: 'ngx-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss'],
})
export class ModelsComponent implements OnInit {

  @ViewChild('tableModel') table: Ng2SmartTableComponent;

  public settings = {
    sort: true,
    // hideSubHeader: true,
    mode: 'external',
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-arrow-retweet"></i>',
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
      position: 'right',
    },
    columns: {
      id: {
        title: 'Id',
        type: 'number',
      },
      name: {
        title: 'Nombre',
        type: 'string',
      },
      statusText: {
        title: 'Estado',
        type: 'string',
      },
    },
  };

  public source: LocalDataSource = new LocalDataSource();
  public data: ModelI[] = [];

  constructor(
    private dialogSvc: NbDialogService,
    private toastrSVC: ToastrService,
    private modelSvc: ModelService,
  ) {
    this.loadTable(false);
  }

  ngOnInit() {
    setTimeout(() => { // first row pick remover
      this.table.grid.dataSet.deselectAll();
    }, 100);
  }

  loadTable(band: boolean) { // Remove flag when integrating the api
    this.data = this.modelSvc.getAll(band);
    this.source.load(this.data);
  }

  onDelete(event): void {
    const id = event['data'].id;
    const question: string = event['data'].status ? 'Desea desactivar el modelo' : 'Desea activar el modelo';
    const message: string = event['data'].status ? 'Modelo desactivado correctamente' : 'Modelo habilitado correctamente';
    this.dialogSvc.open(ModalDeleteComponent,
                    {
                      context: {
                        question,
                      },
                    },
                  )
                  .onClose.subscribe(resp => {
                    if ( resp ) {
                      this.modelSvc.delete(id).subscribe( resp => {
                        if ( resp.code === 200) {
                          this.toastrSVC.showToast('success', 'topR', 'Accion exitosa', 3000, message);
                          this.loadTable(true);
                        } else {
                          this.toastrSVC.showToast('danger', 'topR', 'Error', 3000, 'No se pudo activa/desactivar el modelo');
                        }
                      });
                    }
                  });

  }

  openModalNew( e? ) {
    const model = e?.data;
    this.dialogSvc.open(NewModelComponent, {
      context: {
        model,
      },
    }).onClose.subscribe( resp => {
      this.loadTable(true);
    });
  }

}
