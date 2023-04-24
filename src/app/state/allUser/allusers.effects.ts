import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AdminServiceService } from '../../services/admin-service.service';
import * as UserActions from '../allUser/alluser.actions';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: AdminServiceService) {}

  deleteUser$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      switchMap(({ id }) =>
        this.userService.deleteUser(id).pipe(
          map(() => UserActions.deleteUserSuccess({ id })),
          catchError((error) => of(UserActions.deleteUserFailure({ error })))
        )
      )
    )
  );
}