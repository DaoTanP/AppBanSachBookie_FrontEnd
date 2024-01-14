import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService
{
  private BOOK_API_URL = 'http://localhost:3000/book';
  private USER_API_URL = 'http://localhost:3000/user';
  private requestHeaders = {
    'Authorization': 'Bearer ' + this.dataService.getSession('access_token'),
  }

  constructor(private httpClient: HttpClient, private dataService: DataService) { }

  public login (user: User): Observable<any>
  {
    return this.httpClient.post(this.USER_API_URL + '/login', user, /* { observe: 'response', responseType: "text" } */);
  }

  public register (user: User): Observable<any>
  {
    return this.httpClient.post(this.USER_API_URL + '/register', user);
  }

  public usernameAvailable (username: string): Observable<any>
  {
    return this.httpClient.post(this.USER_API_URL + "/usernameAvailable", { username }, { observe: 'response', responseType: "text" });
  }

  public getUserInfo (id: string = ''): Observable<any>
  {
    console.log('requesting user info');

    if (id != '')
      return this.httpClient.get(this.USER_API_URL, { headers: this.requestHeaders });

    return this.httpClient.get(this.USER_API_URL + '/' + id, { headers: this.requestHeaders });
  }

  public editUserInfo (userInfoChanges: any): Observable<any>
  {
    return this.httpClient.patch(this.USER_API_URL, userInfoChanges, { headers: this.requestHeaders });
  }

  public deleteUser (): Observable<any>
  {
    return this.httpClient.delete(this.USER_API_URL, { headers: this.requestHeaders, observe: 'response', responseType: "text" });
  }

  public uploadAvatar (image: any): Observable<any>
  {
    return this.httpClient.patch(this.USER_API_URL, image, { headers: this.requestHeaders });
  }

  // public changeUserPassword ({ username, oldPassword, newPassword }: any): Observable<any>
  // {
  //   return this.httpClient.post(this.USER_API_URL + '/changePassword', { username, oldPassword, newPassword }, { observe: 'response', responseType: "text" });
  // }

  public getBooks (id: string = ''): Observable<any>
  {
    if (id != '')
      return this.httpClient.get(this.BOOK_API_URL + '/' + id);

    return this.httpClient.get(this.BOOK_API_URL);
  }

  // public getTopBorrow (): Observable<any>
  // {
  //   return this.httpClient.get(this.BOOK_API_URL + '/top');
  // }

  // public GetRandomRecommendation (): Observable<any>
  // {
  //   return this.httpClient.get(this.BOOK_API_URL + '/randomRecommendation');
  // }

  public getCategories (): Observable<any>
  {
    return this.httpClient.get(this.BOOK_API_URL + '/category');
  }

  // public getAuthors (): Observable<any>
  // {
  //   return this.httpClient.get(this.BOOK_API_URL + '/author');
  // }

  // public getPublishers (): Observable<any>
  // {
  //   return this.httpClient.get(this.BOOK_API_URL + '/publisher');
  // }

  public searchBooks (searchModel: any): Observable<any>
  {
    // remove all null properties
    const sm = Object.keys(searchModel)
      .filter((k) => searchModel[k] != null)
      .reduce((a, k) => ({ ...a, [k]: searchModel[k] }), {});

    return this.httpClient.get(this.BOOK_API_URL, { params: sm });
  }

  // public addFavorite ({ bookId, userId }: any): Observable<any>
  // {
  //   const id = null;
  //   return this.httpClient.post(this.USER_API_URL + '/addFavorite', { id, bookId, userId });
  // }
  // public removeFavorite ({ bookId, userId }: any): Observable<any>
  // {
  //   const id = null;
  //   return this.httpClient.post(this.USER_API_URL + '/removeFavorite', { id, bookId, userId });
  // }
  // public isFavorite ({ bookId, userId }: any): Observable<any>
  // {
  //   const id = null;
  //   return this.httpClient.post(this.USER_API_URL + '/isFavorite', { id, bookId, userId });
  // }
  // public getFavorite (id: string): Observable<any>
  // {
  //   return this.httpClient.get(this.USER_API_URL + `/${id}/favorite`);
  // }
}