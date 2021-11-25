import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistEditItemComponent } from './playlist/playlist-item/playlist-edit-item/playlist-edit-item.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'playlist', pathMatch: 'full' },
  { path: 'playlist', component: PlaylistComponent,
    children: [
      { path: ':id', component: PlaylistEditItemComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
