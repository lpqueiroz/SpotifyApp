import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '../models/token.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token!: Token;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);

    const code = urlParams.get('code');

    if (!code) {
      this.authService.requestAuthorization();   
    } else {
      this.authService.getToken(code).subscribe(data => {
        this.token = data;
        console.log(this.token);
        localStorage.setItem('token', this.token.access_token);
        this.router.navigateByUrl('playlists');
      })
    }
  }

}
