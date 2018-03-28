import { Action } from '@ngrx/store';

export enum JokesActionTypes {
  GET_JOKES = '[Jokes] GET_JOKES',
  GET_JOKES_SUCCESS = '[Jokes] GET_JOKES_SUCCESS',
  GET_JOKES_FAILED = '[Jokes] GET_JOKES_FAILED',
  GET_JOKE = '[Jokes] GET_JOKE',
  GET_JOKE_SUCCESS = '[Jokes] GET_JOKE_SUCCESS',
  GET_JOKE_FAILED = '[Jokes] GET_JOKE_FAILED',
  REMOVE_JOKE = '[Jokes] REMOVE_JOKE'
}

export class GetJokes implements Action {
  readonly type = JokesActionTypes.GET_JOKES;
}

export class GetJokesSuccess implements Action {
  readonly type = JokesActionTypes.GET_JOKES_SUCCESS;

  constructor(payload: any) {}
}

export class GetJokesFailed implements Action {
  readonly type = JokesActionTypes.GET_JOKES_FAILED;
}

export class GetJoke implements Action {
  readonly type = JokesActionTypes.GET_JOKE;
}

export class GetJokeSuccess implements Action {
  readonly type = JokesActionTypes.GET_JOKE_SUCCESS;

  constructor(payload: any) {}
}

export class GetJokeFailed implements Action {
  readonly type = JokesActionTypes.GET_JOKE_FAILED;
}

export class RemoveJoke implements Action {
  readonly type = JokesActionTypes.REMOVE_JOKE;

  constructor(payload: number) {}
}

export type JokesActions =
  | GetJokes
  | GetJokesSuccess
  | GetJokesFailed
  | GetJoke
  | GetJokeSuccess
  | GetJokeFailed
  | RemoveJoke;
