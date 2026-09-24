import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { ShareInfoService } from '../../../shared/services/share-info.service';
import { isEmailValid } from '../../../shared/utils/validators/validators';

@Component({
  selector: 'app-login',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss', '../login.page.scss', '../../../shared/utils/validators/validators.scss'],
  standalone: false,
})
export class EmailPage implements OnInit {

  private _router = inject(Router);
  private _shareInfoService = inject(ShareInfoService);

  emailValue: string = '';

  isEmailValid = isEmailValid;

  constructor() { }

  ngOnInit() { 
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
   }

  EmailToPasswordPage() {
    if (this.emailValue.trim()){
      this._shareInfoService.setEmail(this.emailValue.trim());
      this._router.navigate(['/login/password']);
    }
  }

  get isFormValid() {
    return isEmailValid(this.emailValue);
  }

  OnSubmit() {
    this.EmailToPasswordPage();
  }
}
