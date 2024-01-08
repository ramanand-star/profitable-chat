import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoundingBottomPageRoutingModule } from './rounding-bottom-routing.module';

import { RoundingBottomPage } from './rounding-bottom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoundingBottomPageRoutingModule
  ],
  declarations: [RoundingBottomPage]
})
export class RoundingBottomPageModule {}
