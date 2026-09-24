import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ChangePasswordCodePage } from './code/change-password-code.page';

import { Routes, RouterModule } from '@angular/router';
import { NewPasswordPage } from './new-password/new-password.page';
import { SharedModule } from '../../shared/shared-module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'code',
    pathMatch: 'full',
  },
  {
    path: 'code',
    component: ChangePasswordCodePage
  },
  {
    path: 'new-password',
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
  declarations: [ChangePasswordCodePage, NewPasswordPage],
  exports: [RouterModule]
})
export class ChangePasswordPageModule {}
