import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

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

  emailValue: string = '';
  codeValue: string = '';
  flow: string = '';

  constructor() { }

  ionViewWillEnter() { 
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    this.flow = this._route.snapshot.queryParams['flow'] || 'login';
    this.emailValue = this._route.snapshot.queryParams['email'] || '';

    this._changeDetectorRef.detectChanges();
   }

   RedirectToResetPasswordPage() {
    this._router.navigate(['/reset-password'], {
      state: {code: this.codeValue}
    });
   }

   RedirectToPasswordLoginPage() {
    this._router.navigate(['/login/password'], {
      queryParams: {email: this.emailValue}
    });
   }

   RedirectToHome() {
    this._router.navigate(['/patient']);
   }

  OnSubmit() {
    if (this.flow === 'reset_password'){
      this.RedirectToResetPasswordPage();
    }
  else {
    this.RedirectToHome();
    }
  }
}
