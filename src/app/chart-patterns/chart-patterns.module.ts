import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartPatternsPageRoutingModule } from './chart-patterns-routing.module';

import { ChartPatternsPage } from './chart-patterns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartPatternsPageRoutingModule
  ],
  declarations: [ChartPatternsPage]
})
export class ChartPatternsPageModule {}
