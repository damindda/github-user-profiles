import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './reducers';

export const getUsersState =
  createFeatureSelector<UserState>('userState');

export const getAllUsersSelector = createSelector(
  getUsersState,
  (state: UserState) => state?.allusers
);

