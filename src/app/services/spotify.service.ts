import { Injectable } from '@angular/core';
import { Playlist } from '../models/playlist.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private baseUrl = "http://localhost:3000/playlists";

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

  getPlaylistsFromServer() {
    return this.http.get<Playlist[]>(this.baseUrl);
  }

  getPlaylistFromServer(id: number) {
    return this.http.get<Playlist>(`${this.baseUrl}/${id}`);
  }
}
