import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {fetchedCategory} from '../models/category.model';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
  private readonly baseUrl= "http://localhost:3000/";

  categoryList ;
  addnewCategory(newcat) :Observable<object>{
    return this.http.post(this.baseUrl+"addcategory" , newcat)
  }
  getCategory():Observable<fetchedCategory>{
    return this.http.get<fetchedCategory>(this.baseUrl+"getCategory");
  }
}
