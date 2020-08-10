import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../app/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit, OnDestroy {

  product: Product;
  isLoadProduct: boolean = false;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
      this.route.paramMap.subscribe(params => {
        this.isLoadProduct = true;
        if(params.has('productId')) {
          this.getProduct(params.get('productId'))
        }
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /* Getting product by id */
  getProduct(id: string) {
    this.subscription = this.productService.getProduct(id).subscribe(res => {
      this.product = res;
      this.isLoadProduct = false;
      console.log(JSON.stringify(this.product));
    }, err => {
      this.isLoadProduct = false;
      console.log(err);
    });

  }

}
