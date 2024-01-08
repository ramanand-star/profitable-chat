import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccendingPageRoutingModule } from './accending-routing.module';

import { AccendingPage } from './accending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccendingPageRoutingModule
  ],
  declarations: [AccendingPage]
})
export class AccendingPageModule {}
