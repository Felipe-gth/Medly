import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { Routes, RouterModule } from '@angular/router';
import { NewPasswordPage } from './reset-password.page';
import { SharedModule } from '../../shared/shared-module';

const routes: Routes = [
  {
    path: '',
    component: NewPasswordPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes), SharedModule
  ],
  declarations: [NewPasswordPage],
  exports: [RouterModule]
})
export class ResetPasswordPageModule {}
