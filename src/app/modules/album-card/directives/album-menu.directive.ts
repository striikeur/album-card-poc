import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[album-menu]',
})
export class AlbumMenuDirective {
  constructor(private _menuTemplate: TemplateRef<unknown>) {}

  get menuTemplate(): TemplateRef<unknown> {
    return this._menuTemplate;
  }
}
