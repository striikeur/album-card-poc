import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public getSubtitle(): string {
    return 'Du 27 janvier - 28 janvier 2023 ';
  }

  public getImgUrl(): string {
    return 'https://picsum.photos/200/300';
  }
}
