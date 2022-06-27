import { ActionReducerMap } from '@ngrx/store';
import { UserState, userReducer } from './users/reducers';

export interface AppState {
  userState: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  userState: userReducer,
};
