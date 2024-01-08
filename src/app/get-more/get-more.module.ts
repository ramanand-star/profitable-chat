import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetMorePageRoutingModule } from './get-more-routing.module';

import { GetMorePage } from './get-more.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetMorePageRoutingModule
  ],
  declarations: [GetMorePage]
})
export class GetMorePageModule {}
