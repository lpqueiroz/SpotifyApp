import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private spotifyUrl = "https://api.spotify.com/v1/me/playlists";
  private redirect_uri = "http://127.0.0.1:4200/login";
  private clientId = "216e1a5864a44b8ba5c325df627d7ace";
  private clientSecret = "a386974ef5d14fe69e5d9282c21bd6ed";

  constructor(
    private http: HttpClient
  ) { }

  requestAuthorization() {
    const AUTHORIZE = "http://accounts.spotify.com/authorize";

    let url = `${AUTHORIZE}?client_id=${this.clientId}&response_type=code&redirect_uri=${encodeURI(this.redirect_uri)}`;

    window.location.href = url;
  }

  getToken(code: string | null): Observable<Token> {
    const headers = new HttpHeaders().set(
      'Content-Type', 'application/x-www-form-urlencoded').set('Authorization', 'Basic ' + btoa(this.clientId + ':' + this.clientSecret));
    
    const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

    const body = `grant_type=authorization_code&code=${code}&client_id=${this.clientId}&client_secret=${this.clientSecret}&redirect_uri=${encodeURI(this.redirect_uri)}`;

    return this.http.post<Token>(TOKEN_ENDPOINT, body, { headers: headers })
  }
}
