import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly baseUrl = "http://localhost:3000/";
  constructor(private http:HttpClient) { }

  currentUser ;

  signupUser(form){
    return this.http.post(this.baseUrl+"signup" , form);
  }

  loginUser(form){
    return this.http.post(this.baseUrl+"login", form);
  }
}
