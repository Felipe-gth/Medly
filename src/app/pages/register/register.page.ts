import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './register.page.html',
  styleUrls: ['../../pages/login/login.page.scss', './register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {

  emailValue: string = '';
  registerPassword: string = '';
  confirmPassword: string = '';
  
  passwordVisible: boolean = false;
  equalPasswords: boolean = this.registerPassword.trim() === this.confirmPassword.trim();

  constructor() { }

  ngOnInit() { ; }

  TogglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
