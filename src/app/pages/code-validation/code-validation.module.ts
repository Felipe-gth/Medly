import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CodeValidationPage } from './code-validation.page';

const routes: Routes = [
  {
    path: '',
    component: CodeValidationPage
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
  declarations: [CodeValidationPage],
  exports: [RouterModule]
})
export class CodeValidationModule { }
