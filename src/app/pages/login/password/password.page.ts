import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { AuthService } from '../../../core/services/auth.service';

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
  private _authService = inject(AuthService);

  email: string = '';
  passwordValue: string = '';
  flow: string = '';

  ionViewWillEnter() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    
    const emailValue = this._authService.GetEmail();
    if(emailValue) {
      this.email = emailValue;
    }

    this.flow = this._route.snapshot.queryParams['flow'] || '';

    this._changeDetectorRef.detectChanges();
  }

  RedirectToResetPasswordCodeValidation() {
    this._router.navigate(['/code-validation'],{
      queryParams: {flow: 'reset_password'}
    }
    )
  }

  RedirectToHome() {
    this._router.navigate(['/patient'])
  }

  OnSubmit() {
    this.RedirectToHome();
  }
}
