import { MedicationsPageModule } from './medications/medications.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PatientLayoutComponent } from './patient-layout/patient-layout.component';
import { HomePage } from './home/home.page';
import { MedicationsPage } from './medications/medications.page';

const routes: Routes = [
  {
    path: '',
    component: PatientLayoutComponent,
    children: [ 
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'medications',
        loadChildren: () =>
          import('./medications/medications.module').then(m => m.MedicationsPageModule)
      },
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PatientRoutingModule { }
