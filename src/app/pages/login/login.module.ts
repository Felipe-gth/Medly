import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { EmailPage } from './email/email.page';
import { PasswordPage } from './password/password.page';

import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared-module';
import { EmailExistsGuard } from '../../core/guards/login.guard';


const routes: Routes = [
   {
    path: '',
    redirectTo: 'email',
    pathMatch: 'full'
  },
  {
    path: 'email',
    component: EmailPage
  },
  {
    path: 'password',
    component: PasswordPage,
    canActivate: [EmailExistsGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [EmailPage, PasswordPage],
  exports: [RouterModule]
})
export class LoginPageModule {}
