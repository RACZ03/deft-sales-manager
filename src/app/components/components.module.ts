import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalChangeStatusComponent } from './modal-change-status/modal-change-status.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [
    ModalChangeStatusComponent,
    ModalDeleteComponent
  ],
  exports: [
    ModalChangeStatusComponent,
    ModalDeleteComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
  ]
})
export class ComponentsModule { }
