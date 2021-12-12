import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource, Ng2SmartTableComponent } from 'ng2-smart-table';
import { ToastrService } from '../../services/toastr.service';
import { ProductService } from '../../services/product.service';
import { NbDialogService } from '@nebular/theme';
import { ModalDeleteComponent } from '../../components/modal-delete/modal-delete.component';
import { ProductI } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild('table') table: Ng2SmartTableComponent;
  public showModal: boolean = false;
  public data: ProductI[] = [];
  public product: ProductI;
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
      perPage: 10
    },
    actions: {
      title: 'Acciones',
      add: false,      //  if you want to remove add button
      edit: false,     //  if you want to remove edit button
      delete: false, //  if you want to remove delete button
      position: 'right',
      custom: [ // Custom buttons
        {
          name: 'see',
          title: '<i class="nb-search" title="Ver"></i>'
        },
        {
          name: 'edit',
          title: '<i class="nb-edit" title="Editar"></i>'
        },
        {
          name: 'delete',
          title: '<i class="nb-trash" title="Eliminar"></i>'
        }
      ]
    },
    columns: {
      code: {
        title: 'Codigo',
        type: 'string',
      },
      name: {
        title: 'Nombre',
        type: 'string',
      },
      salePrice: {
        title: 'Precio',
        type: 'number',
      },
      discount: {
        title: 'Descuento',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private toastrSVC: ToastrService,
    private productSvc: ProductService,
    private dialogSvc: NbDialogService
  ) {
    this.data = this.productSvc.getAll();
    this.data = [...this.data, ...this.data, ...this.data, ...this.data]
    this.source.load(this.data);
  }

  ngOnInit() {
    setTimeout(() => { // first row pick remover
      this.table.grid.dataSet.deselectAll();
    }, 100);
  }

  onSelect(e: any) {
    if ( e.action === 'see') {
      this.show(e);
    } else if (e.action == 'edit') {
      this.addProduct(e);
    } else {
      this.onDelete(e);
    }
  }

  show(e: any) { 
    // Show modal product detail
    alert('Ver');
  }

  onDelete(e): void {
    
    let id = e['data'].id;
    this.dialogSvc.open(ModalDeleteComponent)
                  .onClose.subscribe(resp => {
                    if ( resp ) {
                      this.productSvc.delete(id).subscribe( resp => {
                        if ( resp.code === 200) {
                          this.toastrSVC.showToast('success', 'topR', 'Accion exitosa', 3000, 'Producto eliminado');
                        } else {
                          this.toastrSVC.showToast('danger', 'topR', 'Error', 3000, 'No se elimino el producto');
                        }
                      });
                    }
                  });

  }

  addProduct(e?) {
    this.product = e?.data;
    delete this.product?.status;
    delete this.product?.createdAt;
    delete this.product?.updatedAt;
    this.showModal = !this.showModal; 
  }

}
