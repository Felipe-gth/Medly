import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { isEmailValid } from '../../../shared/utils/validators/validators';
import { AuthService } from '../../../core/services/auth.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss', '../login.page.scss', '../../../shared/utils/validators/validators.scss'],
  standalone: false,
})
export class EmailPage implements ViewWillEnter {

  private _route = inject(ActivatedRoute)
  private _router = inject(Router);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _authService = inject(AuthService)

  email: string = ''; 
  flow: string = '';

  isEmailValid = isEmailValid;

  constructor() { }

  ionViewWillEnter() { 
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    const emailValue = this._authService.GetEmail();
    if (emailValue) {
      this.email = emailValue;
    }

    this.flow = this._route.snapshot.queryParams['flow'] || '';

    console.log(this.flow ? 'flow certo' : 'flow nao pega');

    this._changeDetectorRef.detectChanges();
  }

  get isFormValid() {
    return isEmailValid(this.email);
  }

  RedirectToLoginCodeValidation() {
    if (this.email.trim()){
      this._router.navigate(['/code-validation'], {
        queryParams: {flow: 'login'}
      });
    }
  }

  RedirectToPasswordPage() {
    if (this.email.trim()) {
      this._router.navigate(['/login/password'], {
        queryParams: {flow: 'new_password_login'}
      });
    }
  }

  OnSubmit() {
    this._authService.SetEmail(this.email);

    if (this.flow === 'new_password_login')
    {
      this.RedirectToPasswordPage();
    }
    else {
      this.RedirectToLoginCodeValidation();
    }
  }
}
