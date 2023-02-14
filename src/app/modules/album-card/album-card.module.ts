import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCardComponent } from './album-card/album-card.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: AlbumCardComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AlbumCardComponent,
  ],
})
export class AlbumCardModule { }
