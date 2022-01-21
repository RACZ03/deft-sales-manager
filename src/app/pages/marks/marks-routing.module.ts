import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MarksComponent } from './marks.component';

const routes: Routes = [{ path: '', component: MarksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarksRoutingModule {
}
