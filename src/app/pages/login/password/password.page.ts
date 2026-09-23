import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-login-password',
  templateUrl: './password.page.html',
  styleUrls: ['../login.page.scss', './password.page.scss'],
  standalone: false,
})
export class PasswordPage implements ViewWillEnter {

  private _router = inject(Router);
  private _loginService = inject(LoginService);

  emailValue: string = '';
  passwordVisible: boolean = false;
  passwordValue: string = '';

  ionViewWillEnter() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    this.emailValue = this._loginService.getEmail();

    if (!this.emailValue.trim()) {
      this._router.navigate(['/login'])
    }
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
