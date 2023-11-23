import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent
{
  protected book: Book | undefined;
  constructor(private route: ActivatedRoute)
  {
    const code = this.route.snapshot.paramMap.get('id') || '';

    this.book = new Book() /* get book */;
  }
}
