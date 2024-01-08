import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvertedPageRoutingModule } from './inverted-routing.module';

import { InvertedPage } from './inverted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvertedPageRoutingModule
  ],
  declarations: [InvertedPage]
})
export class InvertedPageModule {}
