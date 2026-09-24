import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-password-input',
    templateUrl: './password-input.component.html',
    styleUrls: ['../../../pages/login/login.page.scss', './password-input.component.scss'],
    standalone: false
})
export class PasswordInputComponent {
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() value: string = '';
    
    @Output() valueChange = new EventEmitter<string>();

    passwordVisible: boolean = false;

    ToggleVisibility(): void {
        this.passwordVisible = !this.passwordVisible;
    }

    onInput(event: any): void {
        this.valueChange.emit(event.target.value);
    }
}