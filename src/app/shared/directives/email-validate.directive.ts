import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true
    }
  ],
  standalone: false
})
export class EmailValidatorDirective implements Validator {
  private readonly emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (!control.value) {
      return null; // O required já cuida do campo vazio
    }

    const isValid = this.emailRegex.test(control.value.trim());
    return isValid ? null : { invalidEmail: true };
  }
}