import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent
{
  @Input() book: Book = new Book();
  @Input() href: string | undefined = undefined;
  @Input() isHorizontal: boolean = false;

  imageLoad (e: any)
  {
    e.target.classList.remove("placeholder");
  }

  imageError (e: any)
  {
    e.target.src = 'https://dummyimage.com/100x150/ddd/aaa&text=No+image';
  }
}
