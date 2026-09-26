import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineComponent } from './components/medicine/medicine.component';
import { BottomNavbarComponent } from './components/mobile/bottom-navbar/bottom-navbar.component';
import { RouterModule } from '@angular/router';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { LoadingButtonComponent } from './components/loading-button/loading-button.component';
import { IonSpinner } from '@ionic/angular';

@NgModule({
  declarations: [MedicineComponent, BottomNavbarComponent, PasswordInputComponent, LoadingButtonComponent],
  imports: [CommonModule, RouterModule, IonSpinner],
  exports: [MedicineComponent, BottomNavbarComponent, PasswordInputComponent, LoadingButtonComponent]
})
export class SharedModule { }
