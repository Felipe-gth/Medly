import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { EmailPage } from './email/email.page';
import { PasswordPage } from './password/password.page';

import { Routes, RouterModule } from '@angular/router';


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
    component: PasswordPage
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EmailPage, PasswordPage],
  exports: [RouterModule]
})
export class LoginPageModule {}
