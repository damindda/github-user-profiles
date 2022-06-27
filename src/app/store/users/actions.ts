import { createAction, props } from '@ngrx/store';
import { UserActionTypes } from './action-types';


export const getAllUsersAction = createAction(
  UserActionTypes.GET_ALL_USERS,
  props<{ pageNumber: number, perPage: number }>()
)

