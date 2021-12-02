import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnsComponent } from './returns.component';
import { ReturnsRoutingModule } from './returns-routing.module';



@NgModule({
  declarations: [
    ReturnsComponent
  ],
  imports: [
    CommonModule,
    ReturnsRoutingModule
  ]
})
export class ReturnsModule { }
