import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumCardModule } from './modules/album-card/album-card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AlbumCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
