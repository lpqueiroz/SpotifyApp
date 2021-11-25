import { Component, OnInit } from '@angular/core';
import { Playlist } from '../models/playlist.model';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlists!: Playlist[];

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.spotifyService.getPlaylistsFromServer().subscribe((data) => {
      this.playlists = data;
    });
    console.log(this.playlists);
  }

}
