import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactanglePage } from './reactangle.page';

const routes: Routes = [
  {
    path: '',
    component: ReactanglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactanglePageRoutingModule {}
