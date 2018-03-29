import { Joke } from './../reducers/jokes.reducer';
import { Action } from '@ngrx/store';

export enum JokesActionTypes {
  GET_JOKES = '[Jokes] GET_JOKES',
  GET_JOKES_SUCCESS = '[Jokes] GET_JOKES_SUCCESS',
  GET_JOKES_FAILED = '[Jokes] GET_JOKES_FAILED',
  GET_JOKE = '[Jokes] GET_JOKE',
  GET_JOKE_SUCCESS = '[Jokes] GET_JOKE_SUCCESS',
  GET_JOKE_FAILED = '[Jokes] GET_JOKE_FAILED',
  REMOVE_JOKE = '[Jokes] REMOVE_JOKE',
  ADD_JOKE = '[Jokes] ADD_JOKE'
}

export class GetJokes implements Action {
  readonly type = JokesActionTypes.GET_JOKES;
}

export class GetJokesSuccess implements Action {
  readonly type = JokesActionTypes.GET_JOKES_SUCCESS;

  constructor(public payload: any) {}
}

export class GetJokesFailed implements Action {
  readonly type = JokesActionTypes.GET_JOKES_FAILED;
}

export class GetJoke implements Action {
  readonly type = JokesActionTypes.GET_JOKE;
}

export class GetJokeSuccess implements Action {
  readonly type = JokesActionTypes.GET_JOKE_SUCCESS;

  constructor(public payload: any) {}
}

export class GetJokeFailed implements Action {
  readonly type = JokesActionTypes.GET_JOKE_FAILED;
}

export class RemoveJoke implements Action {
  readonly type = JokesActionTypes.REMOVE_JOKE;

  constructor(public payload: number) {}
}

export class AddJoke implements Action {
  readonly type = JokesActionTypes.ADD_JOKE;

  constructor(public payload: Joke) {}
}

export type JokesActions =
  | GetJokes
  | GetJokesSuccess
  | GetJokesFailed
  | GetJoke
  | GetJokeSuccess
  | GetJokeFailed
  | RemoveJoke
  | AddJoke;
