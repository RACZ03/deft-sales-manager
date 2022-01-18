import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { ModelI, NewModelI } from '../../../../interfaces/model';
import { ToastrService } from '../../../../services/toastr.service';
import { ModelService } from '../../../../services/model.service';

@Component({
  selector: 'ngx-new-model',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewModelComponent implements OnInit {

  @Input() model: ModelI;
  public title: string = 'Nuevo modelo';
  public modelForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(
    protected ref: NbDialogRef<NewModelComponent>,
    private fb: FormBuilder,
    private toastrSvc: ToastrService,
    private modelSvc: ModelService,
  ) {}

  ngOnInit(): void {
    if ( this.model !== undefined && this.model?.id > 0 ) {
      this.title = 'Editar modelo';
      const value: NewModelI = { name: this.model.name };

      this.modelForm.setValue(value);
    }
  }

  save() {
    const newModel: ModelI = {
      id: this.model?.id,
      ...this.modelForm.value,
      status: this.model?.status === undefined ? true : this.model?.status,
    };
    const message = newModel?.id === undefined ? 'Modelp agregado' : 'Actualizacion realizada';

    this.modelSvc.createAndUpdate(newModel).subscribe( resp => {
      if ( resp.code === 200 ) {

        this.toastrSvc.showToast('success', 'topR', 'Éxito', 3000, message);
      } else {
        this.toastrSvc.showToast('danger', 'topR', 'Error', 3000, 'No se registro el modelo');
      }
      this.onClose();
    });
  }

  onClose() {
    this.modelForm.reset();
    this.ref.close();
  }

  isValidField(name: string): boolean {
    const fieldName = this.modelForm.get(name);
    return (fieldName.invalid && fieldName.touched) ? true : false;
  }
}
