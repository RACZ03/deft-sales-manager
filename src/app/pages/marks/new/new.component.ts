import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from '../../../services/toastr.service';
import { MarkService } from '../../../services/mark.service';

import { MarkI } from '../../../interfaces/mark';

@Component({
  selector: 'ngx-new-mark',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  public valueExpiration = 1;
  public valueWarranty = 0;
  public title: string = 'Nueva Marca';

  @Output() btnSave = new EventEmitter<boolean>();
  @Input() mark: MarkI;

  public markForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private toastrSVC: ToastrService,
    public markSvc: MarkService,
  ) {
  }

  ngOnInit(): void {
    if ( this.mark !== undefined && this.mark?.id > 0 ) {
      const copy = {...this.mark};
      //eliminar propiedades que no van en el form
      delete copy.id;
      delete copy.status;
      this.markForm.setValue(copy);
    }
  }

  save() {
    const newMark: MarkI = {
      id: this.mark?.id,
      //mandar status cuando se edita
      status: this.mark?.status,
      ...this.markForm.value,
    };
    console.log(newMark)
   
    this.markSvc.createAndUpdate(newMark).subscribe( resp => {
      if ( resp.code === 200 ) {
        const message = newMark?.id === undefined ? 'Marca agregada' : 'Actualización realizada';

        this.toastrSVC.showToast('success', 'topR', 'Éxito', 3000, message);
      } else {
        this.toastrSVC.showToast('danger', 'topR', 'Error', 3000, 'No se registro la marca');
      }
      this.btnSave.emit(true);
    });
  }

  onReset(): void {
    this.markForm.reset();
    this.btnSave.emit(false);
  }

  isValidField(name: string): boolean {
    const fieldName = this.markForm.get(name);
    return (fieldName.invalid && fieldName.touched) ? true : false;
  }

}
