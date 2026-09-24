import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { arePasswordsValid, getPasswordRequirements } from '../../shared/utils/validators/validators';
import { ViewWillEnter } from '@ionic/angular';
import { ShareInfoService } from '../../shared/services/share-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss', '../login/login.page.scss', '../../shared/utils/validators/validators.scss'],
  standalone: false,
})
export class NewPasswordPage implements ViewWillEnter {

  private _router = inject(Router);
  private _changeDetectorRef = inject(ChangeDetectorRef)
  private _shareInfoService = inject(ShareInfoService)

  registerPassword: string = '';
  confirmPassword: string = '';
  codeValue: string = '';

  arePasswordsValid = arePasswordsValid;

  constructor() { }

  ionViewWillEnter() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }    

    this.codeValue = this._shareInfoService.getCode();

    if (!this.codeValue.trim()) {
      this._router.navigate(['/change-password'], { replaceUrl: true });
    }

    this._changeDetectorRef.detectChanges();
  }

  get isFormValid() {
    return arePasswordsValid(this.registerPassword, this.confirmPassword)
  }

  get passwordReqs() {
    return getPasswordRequirements(this.registerPassword)
  }

  Redirect() {
    this._router.navigate(['/login']);
  }

  OnSubmit() {
    this.Redirect();
  }
}
