import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, shareReplay } from 'rxjs';
import { UserDetails } from 'src/app/models/user-details';
import { GitHubUsersService } from 'src/app/services/git-hub-users.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user$!: Observable<UserDetails>;
  subscription!: Subscription;
  userName!: string;

  constructor(
    private gitHubUsersService: GitHubUsersService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe((data) => {
      this.userName = data['id'];
      this.getUserData(this.userName);
    });
  }

  getUserData(userName: string) {
      this.user$ = this.gitHubUsersService.getUser(userName).pipe(shareReplay(1));
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
