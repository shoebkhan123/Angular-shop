import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { SpinnerComponent } from './containers/spinner/spinner.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { NavbarComponent } from './containers/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDetailPageComponent,
    ProductListComponent,
    SpinnerComponent,
    CreateProductPageComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
