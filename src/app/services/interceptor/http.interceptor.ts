import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    let alteredReq : HttpRequest<any>;
    let token = localStorage.getItem('token');
    
    alteredReq = request.clone({
        headers: new HttpHeaders().set(
            'Content-Type', 'application/json').set
            ('Authorization', 'Bearer ' + token)
    });

    return next.handle(alteredReq);
  }
}