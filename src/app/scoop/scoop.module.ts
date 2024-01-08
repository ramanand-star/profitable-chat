import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoopPageRoutingModule } from './scoop-routing.module';

import { ScoopPage } from './scoop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoopPageRoutingModule
  ],
  declarations: [ScoopPage]
})
export class ScoopPageModule {}
