import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
{
  protected bookList: Observable<any> = of([]);
  protected randomRecommendationList: Observable<any> = of([]);

  constructor(private httpService: HttpService, private router: Router)
  {
    this.bookList = this.httpService.getBooks();
  }
}
