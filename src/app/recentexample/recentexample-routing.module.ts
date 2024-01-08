import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentexamplePage } from './recentexample.page';

const routes: Routes = [
  {
    path: '',
    component: RecentexamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentexamplePageRoutingModule {}
