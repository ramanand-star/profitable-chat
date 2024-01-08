import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoundingTopPageRoutingModule } from './rounding-top-routing.module';

import { RoundingTopPage } from './rounding-top.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoundingTopPageRoutingModule
  ],
  declarations: [RoundingTopPage]
})
export class RoundingTopPageModule {}
