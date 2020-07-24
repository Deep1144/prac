import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }
  readonly baseURL ="http://localhost:3000/products/";
  selectedProduct:Products;
  products : Products[];


  postProducts(product :Products){
    return this.http.post(this.baseURL,product);
  }

  getProductsList(){
    return this.http.get(this.baseURL);
  }

  deleteProducts(_id: string) {
    return this.http.delete(this.baseURL + `${_id}`);
  }

  putProducts(product: Products) {
    console.log(product);
    console.log(product._id);
    return this.http.put(this.baseURL + `${product._id}`, product);
  }
}
