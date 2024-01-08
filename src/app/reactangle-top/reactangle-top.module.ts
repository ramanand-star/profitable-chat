import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactangleTopPageRoutingModule } from './reactangle-top-routing.module';

import { ReactangleTopPage } from './reactangle-top.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactangleTopPageRoutingModule
  ],
  declarations: [ReactangleTopPage]
})
export class ReactangleTopPageModule {}
