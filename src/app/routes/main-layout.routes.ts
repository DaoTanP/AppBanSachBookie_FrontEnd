import { Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { BookDetailsComponent } from "../components/book-details/book-details.component";
import { CartComponent } from "../components/cart/cart.component";
import { BookSearchComponent } from "../components/book-search/book-search.component";
import { ProfileComponent } from "../components/profile/profile.component";
// import { AuthGuardService } from "../services/auth-guard.service";
import { PaymentsComponent } from "../components/payments/payments.component";

export const mainLayoutRoute: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: BookSearchComponent },
    { path: 'book', component: BookDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'payment', component: PaymentsComponent },

    { path: 'book/:id', component: BookDetailsComponent },
    { path: 'profile', component: ProfileComponent },
]
