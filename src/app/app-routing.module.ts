import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full'  },
  { path: 'product', component: ProductPageComponent},
  { path: 'create', component: CreateProductPageComponent },
  { path: 'product/:productId', component: ProductDetailPageComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
