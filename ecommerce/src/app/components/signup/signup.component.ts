import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { SingUp } from '../../models/users';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  loginForm = false;
  authError = '';
  msg1: Message[]=[];
  constructor(private usersservice: UserService, private router: Router) {}
  ngOnInit(): void {
    this.usersservice.reloadUser();
  }
  signUp(data: SingUp): void {
    this.usersservice.userSignUp(data);
  }
  login(data: SingUp): void {
    this.authError = '';
    this.usersservice.adminLogin(data);
    this.usersservice.userLogin(data);
    this.usersservice.isLoginError.subscribe((isError) => {
      if (isError) {
        this.msg1=[
          {severity:'error', detail:'Email Or Password Is Not Conrrect'}
        ]
        // this.authError = 'Email Or Password Is Not Conrrect';
      }
    });
  }

  openLogin() {
    this.loginForm = true;
  }
  openSignup() {
    this.loginForm = false;
  }
}
