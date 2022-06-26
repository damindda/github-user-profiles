import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetails } from 'src/app/models/user-details';
import { GitHubUsersService } from 'src/app/services/git-hub-users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user!: UserDetails;
  constructor(
    private gitHubUsersService: GitHubUsersService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((data) => {
      const userName = data['id'];
      console.log('params---->', data['id']);
      this.getUserData(userName);
    });
  }

  getUserData(userName: string) {
    this.gitHubUsersService
      .getUser(userName)
      .subscribe((data: UserDetails) => this.user = data);
  }
}
