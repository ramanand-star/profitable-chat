import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadScamePage } from './head-scame.page';

const routes: Routes = [
  {
    path: '',
    component: HeadScamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadScamePageRoutingModule {}
