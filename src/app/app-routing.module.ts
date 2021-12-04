import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { PlaylistEditItemComponent } from './playlist/playlist-item/playlist-edit-item/playlist-edit-item.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'playlists', canActivate: [AuthGuard], component: PlaylistComponent,
    children: [
      { path: ':id', component: PlaylistEditItemComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
  { path:  '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
