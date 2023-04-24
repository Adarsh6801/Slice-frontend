import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../../models/user.model';
import * as UserActions from '../allUser/alluser.actions';

export interface State extends EntityState<User> {
  error: any;
  deleting: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id
});

export const initialState: State = adapter.getInitialState({
  error: null,
  deleting: false
});

export const userReducer = createReducer(
  initialState,
  on(UserActions.deleteUser, (state, { id }) => {
    return {
      ...state,
      deleting: true
    };
  }),
  on(UserActions.deleteUserSuccess, (state, { id }) => {
    return adapter.removeOne(id, {
      ...state,
      deleting: false
    });
  }),
  on(UserActions.deleteUserFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
      deleting: false
    };
  })
);

export const { selectAll } = adapter.getSelectors();