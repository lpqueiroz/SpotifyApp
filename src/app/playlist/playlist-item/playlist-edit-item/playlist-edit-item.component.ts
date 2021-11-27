import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  editFormOpen: boolean = false;

  playlistForm: FormGroup = new FormGroup({
    name: new FormControl(null)
  });

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

  onDeletePlaylist() {
    this.spotifyService.deletePlaylistFromServer(this.id).subscribe((p) => {
      console.log(p);
      this.spotifyService.playlistChanged.next(p)
    })
  }

  onEditPlaylist() {
    this.editFormOpen = true;
    // this.spotifyService.updatePlaylistFromServer(this.id, )
  }

  updatePlaylist() {
    this.spotifyService.updatePlaylistFromServer(this.id, this.playlistForm.value).subscribe((p) => {
      this.spotifyService.playlistChanged.next(p)
    })
  }

}
