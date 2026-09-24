import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // ou no nível do seu módulo
})
export class ShareInfoService {
  private code: string = '';
  private email: string = '';

  setCode(code: string) {
    this.code = code;
  }

  getCode(): string {
    return this.code;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }
}