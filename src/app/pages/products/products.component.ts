import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource, Ng2SmartTableComponent } from 'ng2-smart-table';
import { ToastrService } from '../../services/toastr.service';
import { ProductService } from '../../services/product.service';
import { NbDialogService } from '@nebular/theme';
import { ModalDeleteComponent } from '../../components/modal-delete/modal-delete.component';
import { ProductI } from '../../interfaces/product';
import { ProductDetailComponent } from './detail/detail.component';

@Component({
  selector: 'ngx-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  @ViewChild('table') table: Ng2SmartTableComponent;
  public showModalNew: boolean = false;

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
      perPage: 10,
    },
    actions: {
      title: 'Acciones',
      columnTitle: 'Acciones',
      add: false,      //  if you want to remove add button
      edit: false,     //  if you want to remove edit button
      delete: false, //  if you want to remove delete button
      position: 'right',
      custom: [ // Custom buttons
        {
          name: 'see',
          title: '<i class="nb-keypad" title="Ver"></i>',
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
      code: {
        title: 'Codigo',
        type: 'string',
      },
      name: {
        title: 'Nombre',
        type: 'string',
      },
      stock: {
        title: 'Existencia',
        type: 'number',
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
    this.data = this.productSvc.getAll(band);
    this.source.load(this.data);
  }

  onSelect(e: any) {
    // Datatable custom actions
    if ( e.action === 'see') {
      this.show(e);
    } else if (e.action === 'edit') {
      this.openModal(e);
    } else {
      this.onDelete(e);
    }
  }

  show(e: any) {
    // Show modal product detail
    const product: ProductI = { ... e.data };
    this.dialogSvc.open(ProductDetailComponent, {
      context: {
        product,
      },
    });
  }

  onDelete(e): void {

    const id = e['data'].id;
    this.dialogSvc.open(ModalDeleteComponent)
                  .onClose.subscribe(resp => {
                    if ( resp ) {
                      this.productSvc.delete(id).subscribe( resp => {
                        if ( resp.code === 200) {
                          this.toastrSVC.showToast('success', 'topR', 'Accion exitosa', 3000, 'Producto eliminado');
                          this.loadTable(true);
                        } else {
                          this.toastrSVC.showToast('danger', 'topR', 'Error', 3000, 'No se elimino el producto');
                        }
                      });
                    }
                  });

  }

  openModal(e?) {
    // If it is edition, assign value
    this.product = e?.data;
    delete this.product?.status;
    delete this.product?.createdAt;
    delete this.product?.updatedAt;

    // show modal
    this.showModalNew = !this.showModalNew;
  }

  closeModel(e?) {
    if ( e ) {
      // Update data
      this.loadTable(true);
    }
    this.showModalNew = !this.showModalNew;
  }

}
