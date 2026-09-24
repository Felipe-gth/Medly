import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ShareInfoService } from '../../../shared/services/share-info.service';
import { ViewWillEnter } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password-code.page.html',
  styleUrls: ['./change-password-code.page.scss', '../../login/login.page.scss', '../../../shared/utils/validators/validators.scss'],
  standalone: false,
})
export class ChangePasswordCodePage implements ViewWillEnter {

  private _router = inject(Router);
  private _shareInfoService = inject(ShareInfoService);
  private _changeDetectorRef = inject(ChangeDetectorRef);

  emailValue: string = '';
  codeValue: string = '';

  constructor() { }

  ionViewWillEnter() { 
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    this.emailValue = this._shareInfoService.getEmail();

    this._changeDetectorRef.detectChanges();
   }

   ToNewPasswordPage() {
    this._shareInfoService.setCode(this.codeValue.trim());
    this._router.navigate(['/change-password/new-password'])
   }

}
