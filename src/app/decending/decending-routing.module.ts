import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecendingPage } from './decending.page';

const routes: Routes = [
  {
    path: '',
    component: DecendingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecendingPageRoutingModule {}
