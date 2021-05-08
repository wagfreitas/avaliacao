import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListExtratoPageRoutingModule } from './list-extrato-routing.module';

import { ListExtratoPage } from './list-extrato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListExtratoPageRoutingModule
  ],
  declarations: [ListExtratoPage]
})
export class ListExtratoPageModule {}
