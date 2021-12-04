import { Injectable } from '@angular/core';
import { Playlist } from '../models/playlist.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Token } from '../models/token.model';
import { PlaylistSpotify } from '../models/playlist-spotify.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private baseUrl = "http://localhost:30001/playlists";
  private spotifyUrl = "https://api.spotify.com/v1/me/playlists";
  private redirect_uri = "http://127.0.0.1:4200/login";
  private clientId = "";
  private clientSecret = "";

  // private playlists: Playlist[] = [
  //   new Playlist(1, 'Pop', ''),
  //   new Playlist(2, 'Chill', ''),
  //   new Playlist(3, 'Latino', ''),
  //   new Playlist(4, 'Rock', ''),
  //   new Playlist(5, 'Focus', '')
  // ]

  constructor(
    private http: HttpClient 
  ) { }

  // getPlaylists() {
  //   return this.playlists;
  // }

  // getPlaylist(id: number) {
  //   return this.playlists.find(p => p.id === id);
  // }  

  playlistChanged = new Subject();

  getPlaylistsFromServer() {
    return this.http.get<Playlist[]>(this.baseUrl);
  }

  getPlaylistFromServer(id: number) {
    return this.http.get<Playlist>(`${this.baseUrl}/${id}`);
  }

  createPlaylistOnServer(name: string) {
    return this.http.post<Playlist>(this.baseUrl, { name: name, imagePath: '' });
  }

  deletePlaylistFromServer(id: number) {
    return this.http.delete<Playlist>(`${this.baseUrl}/${id}`)
  }

  updatePlaylistFromServer(id: number, form: {name: string, imagePath: ''}) {
    return this.http.put<Playlist>(`${this.baseUrl}/${id}`, form);
  }

  getPlaylistsFromSpotify() {
    const access_token = localStorage.getItem('token');
    const headers = new HttpHeaders().set(
      'Content-Type', 'application/json').set(
        'Authorization', 'Bearer ' + access_token 
      );

     return this.http.get<PlaylistSpotify>(this.spotifyUrl, { headers: headers });
  }

}
