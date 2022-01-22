import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource, Ng2SmartTableComponent } from 'ng2-smart-table';
import { ToastrService } from '../../services/toastr.service';
import { MarkService } from '../../services/mark.service';
import { NbDialogService } from '@nebular/theme';
import { ModalChangeStatusComponent } from '../../components/modal-change-status/modal-change-status.component';
import { ModalDeleteComponent } from '../../components/modal-delete/modal-delete.component';
import { MarkI } from '../../interfaces/mark';

@Component({
  selector: 'ngx-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss'],
})
export class MarksComponent implements OnInit {

  @ViewChild('table') table: Ng2SmartTableComponent;
  public showModalNew: boolean = false;

  public data: MarkI[] = [];
  public mark: MarkI;
  public settings = {
    sort: true,
    // hideSubHeader: true,
    mode: 'external',
    // edit: { default cu
    //   editButtonContent: '<i class="nb-edit"></i>'
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    pager: {
      display: true,
      perPage: 10,
    },
    actions: {
      title: 'Acciones',
      add: false,      //  if you want to remove add button
      edit: false,     //  if you want to remove edit button
      delete: false, //  if you want to remove delete button
      position: 'right',
      custom: [ // Custom buttons
        {
          name: 'change',
          title: '<i class="nb-checkmark" title="Cambiar estado"></i>',
        },
        {
          name: 'edit',
          title: '<i class="nb-edit" title="Editar"></i>',
        },
        {
          name: 'delete',
          title: '<i class="nb-trash" title="Eliminar"></i>',
        },
      ],
    },
    columns: {
      name: {
        title: 'Nombre',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'boolean',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private toastrSVC: ToastrService,
    private markSvc: MarkService,
    private dialogSvc: NbDialogService,
  ) {
    this.loadTable(false);
  }

  ngOnInit() {
    setTimeout(() => { // first row pick remover
      this.table.grid.dataSet.deselectAll();
    }, 100);
  }

  loadTable(band: boolean) { // Remove flag when integrating the api
    this.data = this.markSvc.getAll(band);
    this.data = [...this.data];
    this.source.load(this.data);
  }
  changeStatus(e: any) {
    // Show modal change status
    const id = e['data'].id;
    this.dialogSvc.open(ModalChangeStatusComponent)
      .onClose.subscribe(resp => {
        if (resp) {
          this.markSvc.changeStatus(id).subscribe(resp => {
            if (resp.code === 200) {
              this.toastrSVC.showToast('success', 'topR', 'Accion exitosa', 3000, 'Estado cambiado');
              this.loadTable(true);
            } else {
              this.toastrSVC.showToast('danger', 'topR', 'Error', 3000, 'No se cambió el estado');
            }
          });
        }
      });
  }

  openModal(e?) {
    // If it is edition, assign value
    this.mark = e?.data;
    delete this.mark?.createdAt;
    delete this.mark?.updatedAt;

    // show modal
    this.showModalNew = !this.showModalNew;
  }

  onSelect(e: any) {
    // Datatable custom actions
    if (e.action === 'change') {
      this.changeStatus(e);
    } else if (e.action === 'edit') {
      this.openModal(e);
    } else {
      this.onDelete(e);
    }
  }

  onDelete(e): void {
    //delete data
    const id = e['data'].id;
    this.dialogSvc.open(ModalDeleteComponent)
      .onClose.subscribe(resp => {
        if (resp) {
          this.markSvc.delete(id).subscribe(resp => {
            if (resp.code === 200) {
              this.toastrSVC.showToast('success', 'topR', 'Accion exitosa', 3000, 'Marca eliminada');
              this.loadTable(true);
            } else {
              this.toastrSVC.showToast('danger', 'topR', 'Error', 3000, 'No se eliminó la marca');
            }
          });
        }
      });

  }

  closeModal(e?) {
    if (e) {
      // Update data
      this.loadTable(true);
    }
    this.showModalNew = !this.showModalNew;
  }

}
