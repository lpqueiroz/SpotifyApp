import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlaylistSpotify } from '../models/playlist-spotify.model';
import { Playlist } from '../models/playlist.model';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  showForm: boolean = false;

  // playlists!: Playlist[];

  playlists!: PlaylistSpotify;

  // @Output()

  // name!: string;

  playlistForm: FormGroup = new FormGroup({
    name: new FormControl()
  });

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    // this.getPlaylists();
    // console.log(this.playlists);

    this.spotifyService.playlistChanged.subscribe(() => {
      this.getPlaylists();
    })

    this.spotifyService.getPlaylistsFromSpotify().subscribe(data => {
      console.log(data);

      this.playlists = data;
    })
  }

  getPlaylists() {
    // this.spotifyService.getPlaylistsFromServer().subscribe((data) => {
    //   this.playlists = data;
    // });
  }

  onCreatePlaylist() {
    this.showForm = true;
  }

  createPlaylist() {
    // console.log(this.playlistForm);
    // this.spotifyService.createPlaylistOnServer(this.playlistForm.value.name).subscribe(() => {
    //   this.spotifyService.getPlaylistsFromServer().subscribe((data) => {
    //     this.playlists = data;
    //   })
    // })
  }

}
