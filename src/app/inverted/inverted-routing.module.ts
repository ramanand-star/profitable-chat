import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvertedPage } from './inverted.page';

const routes: Routes = [
  {
    path: '',
    component: InvertedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvertedPageRoutingModule {}
