import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { EmailToPasswordService } from '../services/email-to-password.service';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-login-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss', '../login.page.scss', '../../../shared/utils/validators/validators.scss'],
  standalone: false,
})
export class PasswordPage implements ViewWillEnter {

  private _router = inject(Router);
  private _loginService = inject(EmailToPasswordService);
  private _changeDetectorRef = inject(ChangeDetectorRef);

  emailValue: string = '';
  passwordValue: string = '';

  ionViewWillEnter() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    this.emailValue = this._loginService.getEmail();

    if (!this.emailValue.trim()) {
      this._router.navigate(['/login'])
    }

    this._changeDetectorRef.detectChanges();
  }
}
