import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksComponent } from './marks.component';
import { MarksRoutingModule } from './marks-routing.module';

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
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    MarksComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    MarksRoutingModule,
    ThemeModule,
    ReactiveFormsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbRadioModule,
    NbDatepickerModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbActionsModule,
    ComponentsModule,
  ],
})
export class MarksModule { }
