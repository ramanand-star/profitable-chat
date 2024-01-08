import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadTopPage } from './head-top.page';

const routes: Routes = [
  {
    path: '',
    component: HeadTopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadTopPageRoutingModule {}
