import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-login-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss', '../login.page.scss', '../../../shared/utils/validators/validators.scss'],
  standalone: false,
})
export class PasswordPage implements ViewWillEnter {

  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _changeDetectorRef = inject(ChangeDetectorRef);

  emailValue: string = '';
  passwordValue: string = '';

  ionViewWillEnter() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    this.emailValue = this._route.snapshot.queryParams['email'] || '';

    if (!this.emailValue.trim()) {
      this._router.navigate(['/login'], { replaceUrl: true })
    }

    this._changeDetectorRef.detectChanges();
  }

  RedirectToResetPasswordCodeValidation() {
    this._router.navigate(['/code-validation'], {
      queryParams: {flow: 'reset_password', email: this.emailValue}
    })
  }

  RedirectToHome() {
    this._router.navigate(['/patient'])
  }

  OnSubmit() {
    this.RedirectToHome();
  }
}
