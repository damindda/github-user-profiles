import { createReducer, on } from '@ngrx/store';
import {
  getAllUsersAction,
  getAllUsersSuccessAction
} from './actions';
import { User } from 'src/app/models';

export interface UserState {
  error: any;
  allusers: User[];
  loading: boolean;
}

export const initialState: UserState = {
  error: null,
  allusers: [],
  loading: false
};

export const userReducer = createReducer(
  initialState,
  on(getAllUsersAction, (state) => ({
    ...state,
    loading: true
  })),
  on(getAllUsersSuccessAction, (state, { data: data }) => ({
    ...state,
    allusers: data,
    loading: false
  }))
);
