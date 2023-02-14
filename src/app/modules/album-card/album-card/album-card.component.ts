import { Component, ContentChild, Input } from '@angular/core';
import { BadgeDirective } from '../badge-directive/badge.directive';

@Component({
  selector: 'pxl-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent {
  private _title!: string;
  private _subtitle!: string;
  private _imgUrl!: string;

  @ContentChild(BadgeDirective) private _badgeContent!: BadgeDirective;

  constructor() {}
  get badgeContent(): BadgeDirective {
    return this._badgeContent;
  }

  get title(): string {
    return this._title;
  }

  @Input()
  set title(value: string) {
    this._title = value;
  }

  get subtitle(): string {
    return this._subtitle;
  }
  @Input()
  set subtitle(value: string) {
    this._subtitle = value;
  }

  get imgUrl(): string {
    return this._imgUrl;
  }
  @Input()
  set imgUrl(value: string) {
    this._imgUrl = value;
  }
}
