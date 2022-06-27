import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  of,
  switchMap,
  shareReplay,
} from 'rxjs';
import {
  getAllUsersAction,
  getAllUsersSuccessAction,
  getAllUsersErrorAction
} from './actions';
import { GitHubUsersService } from 'src/app/services/git-hub-users.service';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private gitHubUsersService: GitHubUsersService
  ) {}

  getAllUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAllUsersAction),
      switchMap((actions) => {
        return this.gitHubUsersService.getAllUsers(actions.pageNumber, actions.perPage).pipe(
          map((data) => getAllUsersSuccessAction({ data: data })),
          shareReplay(1),
          catchError(() =>
            of(
              getAllUsersErrorAction({
                error: 'there is an error while fetching all public github users data',
              })
            )
          )
        );
      })
    );
  });

}
