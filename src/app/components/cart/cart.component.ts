import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';
import { AlertService, AlertType } from 'src/app/services/alert.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  protected cart: Book[] = [];
  protected waitingForCartAction: boolean = false;
  
  constructor(
    private httpService: HttpService,
    private authGuardService: AuthGuardService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  )
  {
    if (!this.authGuardService.isLoggedIn)
      {
        router.navigate(['/login']);
        return;
      }

      this.reloadData();
  }

  reloadData(){
    this.httpService.getCart().subscribe(books => {this.cart = books; console.log(this.cart)});
  }

  removeCart (bookId: string)
  {
    if (!this.authGuardService.isLoggedIn)
    {
      this.router.navigate(['/login']);
      return;
    }

    this.waitingForCartAction = true;
    this.httpService.removeFromCart(bookId).subscribe({
      next: res =>
      {
        this.reloadData();
        this.waitingForCartAction = false;
      }, error: err =>
      {
        this.waitingForCartAction = false;
        this.alertService.appendAlert('Đã xảy ra lỗi, vui lòng thử lại sau', AlertType.danger, 5, 'alert-container');
      }
    });
  }
}
