import { createAction, props } from '@ngrx/store';
import { UserActionTypes } from './action-types';
import { User } from 'src/app/models';

export const getAllUsersAction = createAction(
  UserActionTypes.GET_ALL_USERS,
  props<{ pageNumber: number, perPage: number }>()
)

export const getAllUsersSuccessAction = createAction(
  UserActionTypes.GET_ALL_USERS_SUCCESS,
  props<{ data: User[]}>()
)

export const getAllUsersErrorAction = createAction(
  UserActionTypes.GET_ALL_USERS_ERROR,
  props<{ error: string}>()
)


