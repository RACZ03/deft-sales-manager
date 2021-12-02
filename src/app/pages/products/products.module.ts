import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';

import { ThemeModule } from '../../@theme/theme.module';
import { 
  NbActionsModule,
  NbButtonModule, 
  NbCardModule, 
  NbDatepickerModule, 
  NbIconModule, 
  NbInputModule, 
  NbRadioModule, 
  NbSelectModule, 
} from '@nebular/theme';
import { NewComponent } from './new/new.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    ProductsComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ThemeModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbRadioModule,
    NbDatepickerModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbActionsModule
  ]
})
export class ProductsModule { }
