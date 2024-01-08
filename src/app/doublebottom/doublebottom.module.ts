import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoublebottomPageRoutingModule } from './doublebottom-routing.module';

import { DoublebottomPage } from './doublebottom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoublebottomPageRoutingModule
  ],
  declarations: [DoublebottomPage]
})
export class DoublebottomPageModule {}
