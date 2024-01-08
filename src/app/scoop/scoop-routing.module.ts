import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoopPage } from './scoop.page';

const routes: Routes = [
  {
    path: '',
    component: ScoopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoopPageRoutingModule {}
