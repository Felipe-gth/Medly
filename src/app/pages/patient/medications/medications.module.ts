import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { MedicationsPage } from './medications.page';
import { SharedModule } from '../../../shared/shared-module';

const routes: Routes = [
  {
    path: '',
    component: MedicationsPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonContent,
    SharedModule,
  ],
  declarations: [MedicationsPage],
})
export class MedicationsPageModule {}
