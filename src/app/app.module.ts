import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistItemComponent } from './playlist/playlist-item/playlist-item.component';
import { PlaylistEditItemComponent } from './playlist/playlist-item/playlist-edit-item/playlist-edit-item.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AuthInterceptor } from './services/interceptor/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    PlaylistItemComponent,
    PlaylistEditItemComponent,
    HeaderComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  // providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
