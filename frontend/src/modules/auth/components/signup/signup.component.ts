import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService ,private router : Router) {}


  userToSignUp : User ;

  ngOnInit(): void {
    this.userToSignUp = {
      name :"",
      email:"",
      password:"",
    }
  }

  onSignupSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      let user: User = form.value;
      this.authService.signupUser(user).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['/'])
      },
      (err)=>{
        console.log(err);
      }
      )
  }
}
}
