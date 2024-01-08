import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CupHandlePageRoutingModule } from './cup-handle-routing.module';

import { CupHandlePage } from './cup-handle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CupHandlePageRoutingModule
  ],
  declarations: [CupHandlePage]
})
export class CupHandlePageModule {}
