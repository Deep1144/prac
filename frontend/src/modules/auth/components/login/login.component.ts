import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService,private route : Router) {}

  userToLogin;
  isError:Boolean =false;
  ngOnInit(): void {
    this.userToLogin = {
      email: '',
      password: '',
    };
  }

  loginUser(form: NgForm) {
    this.authService.loginUser(form.value).subscribe(
      (res) => {
        if(res["error"] === false){
          console.log(res);
          this.isError =false;
          this.authService.currentUser = res["user"];
          this.route.navigate(['/dashboard']);
        }
      },
      (err) => {
        this.isError= true;
        console.log(err);
      }
    );
  }
}
