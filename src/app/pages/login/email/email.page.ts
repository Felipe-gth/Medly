import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { isEmailValid } from '../../../shared/utils/validators/validators';

@Component({
  selector: 'app-login',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss', '../login.page.scss', '../../../shared/utils/validators/validators.scss'],
  standalone: false,
})
export class EmailPage implements OnInit {

  private _router = inject(Router);

  emailValue: string = '';

  isEmailValid = isEmailValid;

  constructor() { }

  ngOnInit() { 
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
   }

  RedirectToLoginCodeValidation() {
    if (this.emailValue.trim()){
      this._router.navigate(['/code-validation'], {
        queryParams: {flow: 'email', email: this.emailValue}
      });
    }
  }

  get isFormValid() {
    return isEmailValid(this.emailValue);
  }

  OnSubmit() {
    this.RedirectToLoginCodeValidation();
  }
}
