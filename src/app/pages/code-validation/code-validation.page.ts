import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './code-validation.page.html',
  styleUrls: ['./code-validation.page.scss', '../login/login.page.scss', '../../shared/utils/validators/validators.scss'],
  standalone: false,
})
export class CodeValidationPage implements ViewWillEnter {

  private _router = inject(Router);
  private _route = inject(ActivatedRoute)
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _authService = inject(AuthService);

  email: string = '';
  code: string = '';
  flow: string = '';
  loading: boolean = false

  constructor() { }

  ionViewWillEnter() { 
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    this.flow = this._route.snapshot.queryParams['flow'] || 'login';

    const emailValue = this._authService.GetEmail();
    if (emailValue) {
      this.email = emailValue;
    }

    this._changeDetectorRef.detectChanges();
   }

   RedirectToResetPasswordPage() {
    this._router.navigate(['/reset-password']);
   }

   RedirectToPasswordLoginPage() {
    this._router.navigate(['/login/password']);
   }

   RedirectToHome() {
    this._router.navigate(['/patient']);
   }

  OnSubmit() {
    this._authService.SetCode(this.code);

    if (this.flow === 'reset_password'){
      this.RedirectToResetPasswordPage();
    }
    else {
      this.RedirectToHome();
    }
  }
}
