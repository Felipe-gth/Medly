import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { Routes, RouterModule } from '@angular/router';
import { MedicinesPage } from './medicines.page';
import { SharedModule } from '../shared/shared-module';



const routes: Routes = [
  {
    path: '',
    component: MedicinesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [MedicinesPage]
})
export class MedicinesPageModule {}
