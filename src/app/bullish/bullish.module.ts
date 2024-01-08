import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BullishPageRoutingModule } from './bullish-routing.module';

import { BullishPage } from './bullish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BullishPageRoutingModule
  ],
  declarations: [BullishPage]
})
export class BullishPageModule {}
