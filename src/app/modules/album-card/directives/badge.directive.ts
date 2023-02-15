import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[album-badge]',
})
export class BadgeDirective {
  constructor(private _badgeTemplate: TemplateRef<unknown>) {}

  get badgeTemplate(): TemplateRef<unknown> {
    return this._badgeTemplate;
  }
}
