import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { GitHubUsersService } from 'src/app/services/git-hub-users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users!: User[];

  constructor(private gitHubUsersService: GitHubUsersService, private router: Router) { }

  ngOnInit(): void {
    this.gitHubUsersService
    .getAllUsers()
    .subscribe((data: User[]) => this.users = data);
  }

  usersTrackBy(index: number, user: User) {
    return user.id;
  }

  navigateToUserDetails(user: User) {
    console.log('user-->', user);
    const id = user.login;
    this.router.navigate(['/user', id]);
  }

}
