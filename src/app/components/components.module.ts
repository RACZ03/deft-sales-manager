import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [
    ModalDeleteComponent
  ],
  exports: [
    ModalDeleteComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
  ]
})
export class ComponentsModule { }
