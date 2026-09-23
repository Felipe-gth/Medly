import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientLayoutComponent } from './patient-layout/patient-layout.component';

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
    CommonModule, RouterModule.forChild(routes), 
  ],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
