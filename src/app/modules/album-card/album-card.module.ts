import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCardComponent } from './album-card/album-card.component';
import { RouterModule, Routes } from '@angular/router';
import { BadgeDirective } from './directives/badge.directive';
import { AlbumMenuDirective } from './directives/album-menu.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: AlbumCardComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  declarations: [AlbumCardComponent, BadgeDirective, AlbumMenuDirective],
  exports: [AlbumCardComponent, BadgeDirective, AlbumMenuDirective],
})
export class AlbumCardModule {}
