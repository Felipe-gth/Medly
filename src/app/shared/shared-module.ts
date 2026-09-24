import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineComponent } from './components/medicine/medicine.component';
import { BottomNavbarComponent } from './components/mobile/bottom-navbar/bottom-navbar.component';
import { RouterModule } from '@angular/router';
import { PasswordInputComponent } from './components/password-input/password-input.component';

@NgModule({
  declarations: [MedicineComponent, BottomNavbarComponent, PasswordInputComponent],
  imports: [CommonModule, RouterModule],
  exports: [MedicineComponent, BottomNavbarComponent, PasswordInputComponent]
})
export class SharedModule { }
