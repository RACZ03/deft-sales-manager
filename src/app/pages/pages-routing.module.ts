import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home', loadChildren: () => import('.//home/home.module').then(m => m.HomeModule),
    },
    { 
      path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule),
    },
    { 
      path: 'shopping', loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule),
    },
    { 
      path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module')
        .then(m => m.AdminModule),
    },
    { 
      path: 'monitoring', loadChildren: () => import('./monitoring/monitoring.module').then(m => m.MonitoringModule),
    },
    { 
      path: 'returns', loadChildren: () => import('./returns/returns.module').then(m => m.ReturnsModule),
    },
    { 
      path: 'kardex', loadChildren: () => import('./kardex/kardex.module').then(m => m.KardexModule),
    },
    { 
      path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    // {
    //   path: '**',
    //   component: NotFoundComponent,
    // },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
