import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader } from '@ionic/angular';
import { HomePage } from './home.page';


import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonContent,
    RouterModule.forChild(routes),
  ],
  declarations: [HomePage],
  exports: [RouterModule]
})
export class HomePageModule {}
