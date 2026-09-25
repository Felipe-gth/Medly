import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { arePasswordsValid, getPasswordRequirements } from '../../shared/utils/validators/validators';
import { ViewWillEnter } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss', '../login/login.page.scss', '../../shared/utils/validators/validators.scss'],
  standalone: false,
})
export class NewPasswordPage implements ViewWillEnter {

  private _router = inject(Router);
  private _changeDetectorRef = inject(ChangeDetectorRef)

  registerPassword: string = '';
  confirmPassword: string = '';
  codeValue: string = '';

  arePasswordsValid = arePasswordsValid;

  constructor() {
    const navigation = this._router.getCurrentNavigation();
    
    if (navigation?.extras.state) {
      this.codeValue = navigation.extras.state['code'] || '';
    } else {
      const stateNavegador = history.state;
      if (stateNavegador && stateNavegador['code']) {
        this.codeValue = stateNavegador['code'];
      }
    }
   }

  ionViewWillEnter() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }    

    if (!this.codeValue.trim()) {
      this._router.navigate(['/code-validation'], { replaceUrl: true });
    }

    this._changeDetectorRef.detectChanges();
  }

  get isFormValid() {
    return arePasswordsValid(this.registerPassword, this.confirmPassword)
  }

  get passwordReqs() {
    return getPasswordRequirements(this.registerPassword)
  }

  RedirectToLogin() {
    this._router.navigate(['/login']);
  }

  OnSubmit() {
    this.RedirectToLogin();
  }
}
