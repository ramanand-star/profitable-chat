import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoublebottomPage } from './doublebottom.page';

const routes: Routes = [
  {
    path: '',
    component: DoublebottomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoublebottomPageRoutingModule {}
