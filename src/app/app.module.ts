import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { ProfileComponent } from './components/profile/profile.component';
import BookGridComponent from './components/book-grid/book-grid.component';
import { ScrollListComponent } from './components/scroll-list/scroll-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainLayoutComponent,
    HomeComponent,
    PageNotFoundComponent,
    CartComponent,
    BookSearchComponent,
    PaymentsComponent,
    BookItemComponent,
    ProfileComponent,
    BookGridComponent,
    ScrollListComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
