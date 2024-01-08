import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactangleTopPage } from './reactangle-top.page';

const routes: Routes = [
  {
    path: '',
    component: ReactangleTopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactangleTopPageRoutingModule {}
