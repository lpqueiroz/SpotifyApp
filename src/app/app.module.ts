import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistItemComponent } from './playlist/playlist-item/playlist-item.component';
import { PlaylistEditItemComponent } from './playlist/playlist-item/playlist-edit-item/playlist-edit-item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    PlaylistItemComponent,
    PlaylistEditItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
