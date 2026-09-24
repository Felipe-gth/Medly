import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-password-input',
    templateUrl: './password-input.component.html',
    styleUrls: ['./password-input.component.scss', '../../../pages/login/login.page.scss'],
    standalone: false
})
export class PasswordInputComponent {
    @Input() name: string = 'password';
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() value: string = '';
    @Input() autocomplete: string = 'off'
    
    @Output() valueChange = new EventEmitter<string>();

    passwordVisible: boolean = false;

    ToggleVisibility(): void {
        this.passwordVisible = !this.passwordVisible;
    }

    onInput(event: any): void {
        this.valueChange.emit(event.target.value);
    }
}