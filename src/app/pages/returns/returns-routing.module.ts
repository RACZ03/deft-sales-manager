import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReturnsComponent } from './returns.component';

const routes: Routes = [{ path: '', component: ReturnsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnsRoutingModule {
}
