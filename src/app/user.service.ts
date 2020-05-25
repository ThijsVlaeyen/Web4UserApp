import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { User } from './user';

import {Observable} from 'rxjs';

// dependency injection
@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:8080/Controller?action=GetUsers';
  private updateUserUrl = 'http://localhost:8080/Controller?action=UpdateUser&id=';

  httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
  };
  // dependency injection
  constructor(private http: HttpClient) {
  }

  updateUser(user: User): Observable<User> {
    this.updateUserUrl = 'http://localhost:8080/Controller?action=UpdateUser&id=';
    this.updateUserUrl += user.email;
    console.log(this.updateUserUrl);
    console.log(user);
    return this.http.post<User>(this.updateUserUrl, user.status, this.httpOptions);
  }

  // Observables provide support for passing messages between
  // publishers and subscribers in your application
  getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl, this.httpOptions);
  }
}
