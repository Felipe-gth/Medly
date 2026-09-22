import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientLayoutComponent } from './patient-layout/patient-layout.component';
import { IonContent, IonFooter, IonRouterOutlet } from '@ionic/angular';
import { PatientRoutingModule } from './patient-routing.module';
import { SharedModule } from '../../shared/shared-module';



@NgModule({
  declarations: [PatientLayoutComponent],
  imports: [
    CommonModule, PatientRoutingModule, IonContent, IonRouterOutlet, IonFooter, SharedModule
  ]
})
export class PatientModule { }
