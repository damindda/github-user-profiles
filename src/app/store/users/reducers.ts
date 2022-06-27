import { createReducer, on } from '@ngrx/store';
import {
  getAllUsersAction,
  getAllUsersSuccessAction
} from './actions';
import { User, UserDetails } from 'src/app/models';

export interface UserState {
  error: any;
  allusers: User[];
  user: UserDetails | null;
}

export const initialState: UserState = {
  error: null,
  allusers: [],
  user: null
};

export const userReducer = createReducer(
  initialState,
  on(getAllUsersAction, (state) => ({
    ...state
  })),
  on(getAllUsersSuccessAction, (state, { data: data }) => ({
    ...state,
    allusers: data
  }))
);
