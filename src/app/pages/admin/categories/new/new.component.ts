import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { CategoryI, NewCategoryI } from '../../../../interfaces/category';
import { CategoryService } from '../../../../services/category.service';
import { ToastrService } from '../../../../services/toastr.service';

@Component({
  selector: 'ngx-new-category',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewCategoryComponent implements OnInit {

  @Input() category: CategoryI;
  public title: string = 'Nueva categoría';
  public categoryForm = this.fb.group({
    name: ['', Validators.required],
    ubication: [''],
  });

  constructor(
    protected ref: NbDialogRef<NewCategoryComponent>,
    private fb: FormBuilder,
    private toastrSvc: ToastrService,
    private categorySvc: CategoryService,
  ){}

  ngOnInit(): void {
    if ( this.category !== undefined && this.category?.id > 0 ) {
      this.title = 'Editar categoría'
      const value: NewCategoryI = { name: this.category.name, ubication: this.category.ubication };
      console.log(value);
    
      this.categoryForm.setValue(value);
    }
  }

  save() {
    const newCategory: CategoryI = {
      id: this.category?.id,
      ...this.categoryForm.value,
      status: this.category?.status === undefined ? true : this.category?.status,
    };

    this.categorySvc.createAndUpdate(newCategory).subscribe( resp => {
      if ( resp.code === 200 ) {
        const message = newCategory?.id === undefined ? 'Producto agregado' : 'Actualizacion realizada';
        
        this.toastrSvc.showToast('success', 'topR', 'Éxito', 3000, message);
      } else {
        this.toastrSvc.showToast('danger', 'topR', 'Error', 3000, 'No se registro el producto');
      }
      this.onClose();
    });
  }

  onClose() {
    this.categoryForm.reset();
    this.ref.close();
  }

  isValidField(name: string): boolean {
    const fieldName = this.categoryForm.get(name);
    return (fieldName.invalid && fieldName.touched) ? true : false;
  }
}
