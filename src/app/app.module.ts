import { RelatedProductComponent } from './+product/related-product/related-product.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';


import { ProductDetailsComponent } from './+product/product-details/product-details.component';
import { ProductCartComponent } from './+product/+main-page/product-cart/product-cart.component';
import { ProductRateComponent } from './+shared-UI/product-rate/product-rate.component';
import { HeaderComponent } from './+layout/header/header.component';
import { ProductSlidshowComponent } from './+product/+main-page/product-slidshow/product-slidshow.component';
import { ProductCategoryComponent } from './+product/+main-page/product-category/product-category.component';
import { FooterComponent } from './+layout/footer/footer.component';
import { SliderComponent } from './shared-UI/slider/slider.component';
import { ProductSummaryComponent } from './+product/product-summary/product-summary.component';
import { ProductsSpecificationComponent } from './+product/products-specification/products-specification.component';
import { ProductSliderComponent } from './+product/product-slider/product-slider.component';
import { MainPageComponent } from './+product/+main-page/main-page.component';
import { ProductHotDealsComponent } from './+product/+main-page/product-hot-deals/product-hot-deals.component';
import { ProductTechDevicesComponent } from './+product/+main-page/product-tech-devices/product-tech-devices.component';
import { ProductByBrandComponent } from './+product/+main-page/product-by-brand/product-by-brand.component';
import { SignInComponent } from './+auth/sign-in/sign-in.component';
import { SignUpComponent } from './+auth/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProductCartComponent,
    ProductRateComponent,
    HeaderComponent,
    ProductSlidshowComponent,
    ProductCategoryComponent,
    FooterComponent,
    SliderComponent,
    ProductDetailsComponent,
    ProductSummaryComponent,
    ProductsSpecificationComponent,
    ProductSliderComponent,
    RelatedProductComponent,
    ProductTechDevicesComponent,
    ProductByBrandComponent,
    ProductHotDealsComponent,
    MainPageComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
