import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login, SingUp } from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API='http://localhost:3000';
  isUserLogIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}
  userSignUp(data: SingUp) {
    this.http    
      .post(`${this.API}/user`, data, { observe: 'response' })
      .subscribe((result) => {
        this.isUserLogIn.next(true);
        localStorage.setItem('user', JSON.stringify(result.body));
        this.router.navigate(['']);
      });
  }
  reloadUser() {
    if (localStorage.getItem('admin')) {
      this.isUserLogIn.next(true);
      this.router.navigate(['admin']);
    }
  }

  adminLogin(data: Login) {
    this.http
      .get(
        `${this.API}/admin?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((result: any) => {
        if (result && result.body && result.body.length) {
          localStorage.setItem('admin', JSON.stringify(result.body));
          this.router.navigate(['admin']);
        } else {
          this.isLoginError.emit(true);
        }
      });
  }
  userLogin(data: Login) {
    this.http
      .get(
        `${this.API}/user?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((result: any) => {
        if (result && result.body && result.body.length) {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['']);
        } else {
          this.isLoginError.emit(true);
        }
      });
  }
}

