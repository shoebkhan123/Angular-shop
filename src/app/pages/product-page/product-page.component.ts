import { Router } from '@angular/router';
import { Product } from './../../models/product.model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {

  productList: Product[] = [];
  showSpinner: boolean = false;
  subscription: Subscription;

  constructor( private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
   this.getProductList();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  refreshProductList(event: boolean) {
    if(event) {
      this.getProductList();
    }
  }

  /* get product list */
  getProductList() {
    this.showSpinner = true;
    this.subscription = this.productService.getProductList().subscribe(res => {
      this.showSpinner = false;
      this.productList = res;
      console.log(JSON.stringify(this.productList));
    }, err => {
      this.showSpinner = false;
      console.error(err)
    }
    )
  }

  /* navigate to create product page */
  createProductPage() {
    this.router.navigate(['/create'])
  }

}
