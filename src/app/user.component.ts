import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-users',
  styleUrls: ['./user.component.html'],
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
  users: User[];
  user: User;
  onSelect(user: User): void {
    this.user = user;
  }

  // dependency injection
  constructor(private userService: UserService) {
  }

  // Call subscribe() to start listening for updates
  getUsers(): void {
    // polling
    timer(0, 2500)
      .subscribe(() => {
        this.userService.getUsers()
            .subscribe(data => this.users = data);
    });
  }

  update(user: User): void {
    this.userService.updateUser(user).subscribe(() => this.user.status = user.status);
    console.log('User updated, new status = ' + user.status);
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
