import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineComponent } from './components/medicine/medicine.component';
import { BottomNavbarComponent } from './components/mobile/bottom-navbar/bottom-navbar.component';

@NgModule({
  declarations: [MedicineComponent, BottomNavbarComponent],
  imports: [CommonModule],
  exports: [MedicineComponent, BottomNavbarComponent]
})
export class SharedModule { }
