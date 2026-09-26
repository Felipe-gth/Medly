import { ChangeDetectorRef, Component, inject, OnDestroy } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './code-validation.page.html',
  styleUrls: ['./code-validation.page.scss', '../login/login.page.scss', '../../shared/utils/validators/validators.scss'],
  standalone: false,
})
export class CodeValidationPage implements ViewWillEnter, OnDestroy {

  private _router = inject(Router);
  private _route = inject(ActivatedRoute)
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _authService = inject(AuthService);
  private _intervalId: any;

  email: string = '';
  code: string = '';
  flow: string = '';
  loading: boolean = false

  remainingTime: number = 0;
  isTimerRunning: boolean = false;

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

    this.StartTimer();

    this._changeDetectorRef.detectChanges();
  }

  StartTimer() {
    this.remainingTime = 60;
    this.isTimerRunning = true;

    this._intervalId = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
        this._changeDetectorRef.detectChanges();
      }
      else {
        this.StopTimer();
        this._changeDetectorRef.detectChanges();
      }
    }, 1000);
  }

  StopTimer() {
    this.isTimerRunning = false;

    if (this._intervalId) {
      clearInterval(this._intervalId)
    }
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

  ReSendCode() {

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

  ngOnDestroy() {
    this.StopTimer();
  }
}
