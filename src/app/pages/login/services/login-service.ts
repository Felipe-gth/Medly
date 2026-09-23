import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // ou no nível do seu módulo
})
export class LoginService {
  private email: string = '';

  setEmail(email: string) {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }
}