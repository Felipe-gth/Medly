import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss'],
  standalone: false,
})
export class BottomNavbarComponent {
  public router = inject(Router);

  isMedicinesActive(): boolean {
    return this.router.url.includes('medications');
  }
}
