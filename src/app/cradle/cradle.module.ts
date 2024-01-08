import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CradlePageRoutingModule } from './cradle-routing.module';

import { CradlePage } from './cradle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CradlePageRoutingModule
  ],
  declarations: [CradlePage]
})
export class CradlePageModule {}
