import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

import {Observable} from 'rxjs';

// dependency injection
@Injectable()
export class UserService {

  private usersUrl = 'api/users';

  // dependency injection
  constructor(private http: HttpClient) {
  }

  // Observables provide support for passing messages between
  // publishers and subscribers in your application
  getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl);
  }
}

