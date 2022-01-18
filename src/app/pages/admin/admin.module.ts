import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.components';
import { BoxComponent } from './box/box.component';
import { NewBoxComponent } from './box/new/new.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewCategoryComponent } from './categories/new/new.component';
import { NewCustomerComponent } from './customers/new/new.component';
import { NewSupplierComponent } from './supplier/new/new.component';
import { NewUserComponent } from './users/new/new.component';
import { CustomersComponent } from './customers/customers.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UsersComponent } from './users/users.component';
import { ModelsComponent } from './models/models.component';
import { NewModelComponent } from './models/new/new.component';



@NgModule({
  declarations: [
    AdminComponent,
    BoxComponent,
    CategoriesComponent,
    CustomersComponent,
    SupplierComponent,
    UsersComponent,
    ModelsComponent,
    NewBoxComponent,
    NewCategoryComponent,
    NewCustomerComponent,
    NewSupplierComponent,
    NewUserComponent,
    NewModelComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ThemeModule,
    ReactiveFormsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbSelectModule,
  ],
})
export class AdminModule { }
