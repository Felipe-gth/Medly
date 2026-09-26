import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loading-button',
  template: `
    <button [type]="type"
      [disabled]="loading || disabled"
      [class.disabled]="loading || disabled"
      (click)="onClick()"
      class="btn">

      @if (loading) {
        <ion-spinner name="dots" color="light"></ion-spinner>
      } @else {
        {{ content.trim() }}
      }

    </button>
  `,
  styleUrls: ['./loading-button.component.scss', '../../utils/validators/validators.scss', '../../../pages/login/login.page.scss'],
  standalone: false,
})
export class LoadingButtonComponent {
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() content: string = '';
  @Input() type: 'submit' | 'button' = 'button'

  @Output() btnClick = new EventEmitter<void>();

  constructor() { }

  onClick() {
    if (!this.loading && !this.disabled) {
      this.btnClick.emit();
    }
  }

}
