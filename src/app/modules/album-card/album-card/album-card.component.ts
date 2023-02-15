import { Component, ContentChild, Input } from '@angular/core';
import { BadgeDirective } from '../directives/badge.directive';
import { AlbumMenuDirective } from '../directives/album-menu.directive';

@Component({
  selector: 'pxl-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent {
  private _title!: string;
  private _subtitle!: string;
  private _imgUrl!: string;
  private _optionIcon: string | null = null;

  @ContentChild(BadgeDirective) private _badgeContent!: BadgeDirective;
  @ContentChild(AlbumMenuDirective)
  private _albumMenuContent!: AlbumMenuDirective;

  constructor() {}
  get badgeContent(): BadgeDirective {
    return this._badgeContent;
  }

  get albumMenuContent(): AlbumMenuDirective {
    return this._albumMenuContent;
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

  get optionIcon(): string | null {
    return this._optionIcon;
  }

  @Input()
  set optionIcon(value: string | null) {
    this._optionIcon = value;
  }
}
