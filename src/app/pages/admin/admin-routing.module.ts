import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BoxComponent } from './box/box.component';
import { CategoriesComponent } from './categories/categories.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';
import { AdminComponent } from './admin.components';
import { ModelsComponent } from './models/models.component';


const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'box',
      component: BoxComponent,
    },
    {
      path: 'categories',
      component: CategoriesComponent,
    },
    {
      path: 'supplier',
      component: SupplierComponent,
    },
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: 'customers',
      component: CustomersComponent,
    },
    {
      path: 'models',
      component: ModelsComponent,
    },
  ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
