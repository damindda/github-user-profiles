import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models';
import { getAllUsersSelector, getAllUsersAction } from 'src/app/store/users';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  users!: User[];
  users$: Observable<User[]> = this.store.select(getAllUsersSelector);
  count$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  count: number = 1;
  pageSize: number = 10;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  usersTrackBy(index: number, user: User) {
    return user.id;
  }

  getAllUsers() {
    this.store.dispatch(
      getAllUsersAction({ pageNumber: this.count, perPage: this.pageSize })
    );
  }

  navigateToUserDetails(user: User) {
    const id = user.login;
    this.router.navigate(['/user', id]);
  }

  onScrollDown() {
    this.count$.next(this.count + 1);
    this.count = this.count$.value;
    this.pageSize = this.pageSize + 10;
    this.getAllUsers();
  }
}
