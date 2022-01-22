import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-modal-change-status',
  templateUrl: './modal-change-status.component.html'
})
export class ModalChangeStatusComponent {

  @Input() question: string = '¿Desea cambiar el estado de la marca?';
  constructor(protected ref: NbDialogRef<ModalChangeStatusComponent>) {}

  submit(band: boolean) {
    this.ref.close(band);
  }

}
