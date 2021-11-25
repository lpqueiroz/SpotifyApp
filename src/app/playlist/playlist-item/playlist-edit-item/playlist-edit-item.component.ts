import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Playlist } from 'src/app/models/playlist.model';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-playlist-edit-item',
  templateUrl: './playlist-edit-item.component.html',
  styleUrls: ['./playlist-edit-item.component.css']
})
export class PlaylistEditItemComponent implements OnInit {

  id!: number;
  playlist!: Playlist | undefined;

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    // this.playlist = this.getPlaylist();

    this.getPlaylist();
    
  }

  getPlaylist() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
      this.spotifyService.getPlaylistFromServer(this.id).subscribe((data) => {
        this.playlist = data;
      })
      console.log('PLAYLIST NO EDIT ITEM');
      console.log(this.playlist);
    })
  }

}
