import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatternlearingPageRoutingModule } from './patternlearing-routing.module';

import { PatternlearingPage } from './patternlearing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatternlearingPageRoutingModule
  ],
  declarations: [PatternlearingPage]
})
export class PatternlearingPageModule {}
