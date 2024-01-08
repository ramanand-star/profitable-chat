import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatternlearingPage } from './patternlearing.page';

const routes: Routes = [
  {
    path: '',
    component: PatternlearingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatternlearingPageRoutingModule {}
