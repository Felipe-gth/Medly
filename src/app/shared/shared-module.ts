import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineComponent } from './components/medicine/medicine.component';

@NgModule({
  declarations: [MedicineComponent],
  imports: [
    CommonModule,
],
  exports: [MedicineComponent]
})
export class SharedModule { }
