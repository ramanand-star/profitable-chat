import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadScamePageRoutingModule } from './head-scame-routing.module';

import { HeadScamePage } from './head-scame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadScamePageRoutingModule
  ],
  declarations: [HeadScamePage]
})
export class HeadScamePageModule {}
