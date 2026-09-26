import { Component, inject, OnInit } from '@angular/core';
import { arePasswordsValid, isEmailValid, getPasswordRequirements } from '../../shared/utils/validators/validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './register.page.html',
  styleUrls: ['../../pages/login/login.page.scss', '../../shared/utils/validators/validators.scss', './register.page.scss'],
  standalone: false,  
})
export class RegisterPage implements OnInit {

  private _router = inject(Router);

  name: string = '';
  lastName: string = '';
  email: string = '';
  registerPassword: string = '';
  confirmPassword: string = '';
  
  passwordVisible: boolean = false;
  loading: boolean = false; 
  
  isEmailValid = isEmailValid;
  arePasswordsValid = arePasswordsValid;

  constructor() { }

  ngOnInit() { 
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
   }

  get isFormValid() {
    return isEmailValid(this.email) && 
      arePasswordsValid(this.registerPassword, this.confirmPassword)
  }

  get passwordReqs() {
    return getPasswordRequirements(this.registerPassword);
  }

  RedirectToHome() {
    this._router.navigate(['/patient']);
  }

  OnSubmit() {
    this.RedirectToHome();
  }
}
