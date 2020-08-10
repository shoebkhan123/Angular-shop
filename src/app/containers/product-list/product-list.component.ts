import { Product } from './../../models/product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() PRODUCTS: Product;
  @Output() refreshProductList = new EventEmitter<boolean>();
  constructor( private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
  }

  navigateToProductDetail(productId: string) {
    this.route.navigateByUrl('product'+ '/' + productId);
  }

  deleteProduct(productId: string) {
    this.productService.deleteProduct(productId).subscribe(res => {
      this.refreshProductList.emit(true);
    },
    err => console.log(err)
    )
  }


}
