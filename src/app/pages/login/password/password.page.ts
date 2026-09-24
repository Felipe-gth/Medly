import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ShareInfoService } from '../../../shared/services/share-info.service';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-login-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss', '../login.page.scss', '../../../shared/utils/validators/validators.scss'],
  standalone: false,
})
export class PasswordPage implements ViewWillEnter {

  private _router = inject(Router);
  private _shareInfoService = inject(ShareInfoService);
  private _changeDetectorRef = inject(ChangeDetectorRef);

  emailValue: string = '';
  passwordValue: string = '';

  ionViewWillEnter() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    this.emailValue = this._shareInfoService.getEmail();

    if (!this.emailValue.trim()) {
      this._router.navigate(['/login'], { replaceUrl: true })
    }

    this._changeDetectorRef.detectChanges();
  }

  EmailToChangePasswordPage() {
    this._shareInfoService.setEmail(this.emailValue.trim());
    this._router.navigate(['/code-validation'])
  }

  Redirect() {
    this._router.navigate(['/patient']);
  }

  OnSubmit() {
    this.Redirect();
  }
}
