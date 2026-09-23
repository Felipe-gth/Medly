import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineComponent } from './components/medicine/medicine.component';
import { BottomNavbarComponent } from './components/mobile/bottom-navbar/bottom-navbar.component';
import { RouterModule } from '@angular/router';
import { EmailValidatorDirective } from './directives/email-validate.directive';

@NgModule({
  declarations: [MedicineComponent, BottomNavbarComponent, EmailValidatorDirective],
  imports: [CommonModule, RouterModule],
  exports: [MedicineComponent, BottomNavbarComponent, EmailValidatorDirective]
})
export class SharedModule { }
