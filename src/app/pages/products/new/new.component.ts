import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { ToastrService } from '../../../services/toastr.service';
import { PresentationService } from '../../../services/presentation.service';
import { CategoryService } from '../../../services/category.service';
import { SupplierService } from '../../../services/supplier.service';
import { MarkService } from '../../../services/mark.service';
import { ModelService } from '../../../services/model.service';
import { ProductI } from '../../../interfaces/interfaces';

@Component({
  selector: 'ngx-new-product',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  public valueExpiration = 1;
  public valueWarranty = 0;
  public title: string = 'Nuevo Producto';
  
  @Output() btnSave = new EventEmitter<boolean>();
  @Input() product: ProductI;

  public code: Number = parseInt(this.productSvc.getCode());
  public productForm = this.fb.group({
    code: [{value: this.code, disabled: true}, Validators.required ],
    name: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)] ],
    stock: [ null, Validators.required ],
    presentationId: [null],
    purchasePrice: [ null, Validators.required ],
    salePrice: [ null, Validators.required],
    wholesalePrice: [],
    discount: [],
    expiration: [0],
    expirationDate: [''],
    warranty: [''],
    duration: ['0'],
    supplierId: [null, Validators.required ],
    categoryId: [null, Validators.required ],
    modelId: [null],
    markId: [null],
  })

  constructor(
    private fb: FormBuilder,
    private productSvc: ProductService,
    private toastrSVC: ToastrService,
    public presentationSvc: PresentationService,
    public categorySvc: CategoryService,
    public supplierSvc: SupplierService,
    public markSvc: MarkService,
    public modelSvc: ModelService
  ) { 
  }

  ngOnInit(): void {
    if ( this.product !== undefined && this.product?.id > 0 ) {
      let copy = {...this.product};
      delete copy.id;
      this.productForm.setValue(copy);
    }
  }

  save() {
    const newProduct: ProductI = {
      id: this.product?.id,
      code: this.code,
      ...this.productForm.value
    }
    this.productSvc.createAndUpdate(newProduct).subscribe( resp => {
      if ( resp.code === 200 ) {
        let message = newProduct?.id === undefined ? 'Producto agregado' : 'Actualizacion realizada'
    
        this.toastrSVC.showToast('success', 'topR', 'Éxito', 3000, message);
      } else {
        this.toastrSVC.showToast('danger', 'topR', 'Error', 3000, 'No se registro el producto');
      }
      this.btnSave.emit(true);
    });
  }
  
  onReset(): void {
    this.productForm.reset();
    this.btnSave.emit(true);
  }

  isValidField(name: string): boolean {
    const fieldName = this.productForm.get(name);
    return (fieldName.invalid && fieldName.touched) ? true : false;
  }

}
