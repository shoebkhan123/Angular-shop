import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product-page.component.html',
  styleUrls: ['./create-product-page.component.css']
})
export class CreateProductPageComponent implements OnInit {

  createProductForm : FormGroup;
  pickedImage: string;
  productImage: File;
  isProductCreate: boolean = false;

  constructor( private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.createProductForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      image: new FormControl(null),
    })
  }

  /* On image choose */
  onProductImageChoose(event: Event) {
    // TS doesn't know event has file property so use as HTMLInputElement
    const pickedProductImage = (event.target as HTMLInputElement).files[0];

    if(!pickedProductImage) {
      return
    }
    const fr = new FileReader();

    fr.onload = () => {
      const dataUrl = fr.result.toString();
      this.pickedImage = dataUrl;
      this.productImage = pickedProductImage;
      this.createProductForm.patchValue({
        image: pickedProductImage
      });
      this.createProductForm.get('image').updateValueAndValidity();
    }
    fr.readAsDataURL(pickedProductImage);

  }

  /* Submit product data */
  onCreateProduct() {
    this.isProductCreate = true;
    if(this.createProductForm.invalid) {
      this.isProductCreate = false;
      return
    }
    const formData = new FormData();
    formData.append("title", this.createProductForm.get('title').value);
    formData.append("price", this.createProductForm.get('price').value);
    formData.append("description", this.createProductForm.get('description').value);
    formData.append("image", this.createProductForm.get('image').value);

    this.productService.createProduct(formData).subscribe(() => {
      this.isProductCreate = false;
      this.createProductForm.reset();
      this.router.navigateByUrl('/');

    }, err => {
      this.isProductCreate = false;
      console.error(err);
    });

  }

}
