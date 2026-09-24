import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { EmailToPasswordService } from '../services/email-to-password.service';
import { isEmailValid } from '../../../shared/utils/validators/validators';

@Component({
  selector: 'app-login',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss', '../login.page.scss', '../../../shared/utils/validators/validators.scss'],
  standalone: false,
})
export class EmailPage implements OnInit {

  private _router = inject(Router);
  private _loginService = inject(EmailToPasswordService);

  emailValue: string = '';

  isEmailValid = isEmailValid;

  constructor() { }

  ngOnInit() { 
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
   }

  ToPasswordPage() {
    if (this.emailValue.trim()){
      this._loginService.setEmail(this.emailValue.trim());
      this._router.navigate(['/login/password']);
    }
  }

  get isFormValid() {
    return isEmailValid(this.emailValue);
  }
}
