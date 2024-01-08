import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CupHandlePage } from './cup-handle.page';

const routes: Routes = [
  {
    path: '',
    component: CupHandlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CupHandlePageRoutingModule {}
