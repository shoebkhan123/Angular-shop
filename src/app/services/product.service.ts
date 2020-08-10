import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  createProduct(product: any) {
    console.log(product)
    return this.http.post(this.BASE_URL+ 'product',
    product)
  }

  getProductList() {
    return this.http.get<Product[]>(this.BASE_URL+ 'product');
  }

  getProduct(productId: string) {
    return this.http.get<Product>(this.BASE_URL+ 'product/' + productId);
  }

  deleteProduct(productId: string) {
    return this.http.delete(this.BASE_URL+ 'product/' + productId);
  }

}
