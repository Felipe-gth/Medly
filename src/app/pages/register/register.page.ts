import { Component, OnInit } from '@angular/core';
import { arePasswordsValid, isEmailValid, getPasswordRequirements } from '../../shared/utils/validators/validators';

@Component({
  selector: 'app-login',
  templateUrl: './register.page.html',
  styleUrls: ['../../pages/login/login.page.scss', '../../shared/utils/validators/validators.scss', './register.page.scss'],
  standalone: false,  
})
export class RegisterPage implements OnInit {

  emailValue: string = '';
  registerPassword: string = '';
  confirmPassword: string = '';
  
  passwordVisible: boolean = false;
  equalPasswords: boolean = this.registerPassword.trim() === this.confirmPassword.trim();

  isEmailValid = isEmailValid;
  arePasswordsValid = arePasswordsValid;

  constructor() { }

  ngOnInit() { 
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
   }

  TogglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  get isFormValid() {
    return isEmailValid(this.emailValue) && 
      arePasswordsValid(this.registerPassword, this.confirmPassword)
  }

  get passwordReqs() {
    return getPasswordRequirements(this.registerPassword);
  }
}
