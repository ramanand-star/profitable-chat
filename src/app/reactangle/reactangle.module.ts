import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactanglePageRoutingModule } from './reactangle-routing.module';

import { ReactanglePage } from './reactangle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactanglePageRoutingModule
  ],
  declarations: [ReactanglePage]
})
export class ReactanglePageModule {}
