import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private http: HttpClient) { }

  // Call API and return it with users model.
  getAllUser(): Observable<users[]> {
    return this.http.get<users[]>('https://jsonplaceholder.typicode.com/users')
  }
}
