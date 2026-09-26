import { AuthService } from './../../core/services/auth.service';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { arePasswordsValid, getPasswordRequirements } from '../../shared/utils/validators/validators';
import { ViewWillEnter } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss', '../login/login.page.scss', '../../shared/utils/validators/validators.scss'],
  standalone: false,
})
export class NewPasswordPage implements ViewWillEnter {

  private _router = inject(Router);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _authService = inject(AuthService);

  registerPassword: string = '';
  confirmPassword: string = '';
  code: string = '';
  loading: boolean = false;

  arePasswordsValid = arePasswordsValid;

  constructor() { }

  ionViewWillEnter() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }    

    const codeValue = this._authService.GetCode();
    if(codeValue){
      this.code = codeValue;
    }

    this._changeDetectorRef.detectChanges();
  }

  get isFormValid() {
    return arePasswordsValid(this.registerPassword, this.confirmPassword);
  }

  get passwordReqs() {
    return getPasswordRequirements(this.registerPassword);
  }

  RedirectToLogin() {
    this._router.navigate(['/login'], {
      queryParams: {flow: 'new_password_login'}
    });
  }

  OnSubmit() {
    this.RedirectToLogin();
  }
}
