import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as fromJokesActions from './actions/jokes.actions';
import { ChuckJokesService } from './chuck-jokes/chuck-jokes.service';

@Injectable()
export class AppEffects {
  @Effect()
  jokes$: Observable<Action> = this.actions$.pipe(
    ofType(fromJokesActions.JokesActionTypes.GET_JOKES),
    switchMap(() =>
      this.chuckjokesService
        .getJokes()
        .pipe(
          map(data => new fromJokesActions.GetJokesSuccess(data)),
          catchError(error => of(new fromJokesActions.GetJokesFailed()))
        )
    )
  );

  @Effect()
  joke$: Observable<Action> = this.actions$.pipe(
    ofType(fromJokesActions.JokesActionTypes.GET_JOKE),
    switchMap(() =>
      this.chuckjokesService
        .getJokes()
        .pipe(
          map(data => new fromJokesActions.GetJokeSuccess(data)),
          catchError(error => of(new fromJokesActions.GetJokeFailed()))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private chuckjokesService: ChuckJokesService
  ) {}
}
