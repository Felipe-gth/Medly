/* eslint-disable @angular-eslint/prefer-inject */
import { Directive, Input, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';

@Directive({
  selector: '[appNgElse]',
})
export class ngElseDirective {

  @Input() set ngElse(condition: boolean) {
    if (!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateRef)
    }
    else {
      this._viewContainerRef.clear()
    }
  }

  constructor(private _templateRef: TemplateRef<any>, private _viewContainerRef: ViewContainerRef) {}
}
