import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service';

@Component({
  selector: 'app-login',
  templateUrl: './email.page.html',
  styleUrls: ['../login.page.scss', './email.page.scss'],
  standalone: false,
})
export class EmailPage implements OnInit {

  private _router = inject(Router);
  private _loginService = inject(LoginService);

  emailValue: string = '';

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
}
