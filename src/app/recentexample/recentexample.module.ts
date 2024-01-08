import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentexamplePageRoutingModule } from './recentexample-routing.module';

import { RecentexamplePage } from './recentexample.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentexamplePageRoutingModule
  ],
  declarations: [RecentexamplePage]
})
export class RecentexamplePageModule {}
