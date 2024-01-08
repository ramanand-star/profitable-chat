import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetMorePage } from './get-more.page';

const routes: Routes = [
  {
    path: '',
    component: GetMorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetMorePageRoutingModule {}
