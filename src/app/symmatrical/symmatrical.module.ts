import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymmatricalPageRoutingModule } from './symmatrical-routing.module';

import { SymmatricalPage } from './symmatrical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymmatricalPageRoutingModule
  ],
  declarations: [SymmatricalPage]
})
export class SymmatricalPageModule {}
