import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';



export const deleteUser = createAction('[User List] Delete User', props<{ id: string }>());

export const deleteUserSuccess = createAction('[User List] Delete User Success', props<{ id: string }>());

export const deleteUserFailure = createAction('[User List] Delete User Failure', props<{ error: any }>());