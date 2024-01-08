import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadTopPageRoutingModule } from './head-top-routing.module';

import { HeadTopPage } from './head-top.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadTopPageRoutingModule
  ],
  declarations: [HeadTopPage]
})
export class HeadTopPageModule {}
