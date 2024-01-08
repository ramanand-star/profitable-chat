import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecendingPageRoutingModule } from './decending-routing.module';

import { DecendingPage } from './decending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecendingPageRoutingModule
  ],
  declarations: [DecendingPage]
})
export class DecendingPageModule {}
