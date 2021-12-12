import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent {

  constructor(protected ref: NbDialogRef<ModalDeleteComponent>) {}

  submit(band: boolean) {
    this.ref.close(band);
  }

}
