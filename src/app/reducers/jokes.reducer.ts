import { Action } from '@ngrx/store';

export interface Joke {
  readonly id: number;
  readonly joke: string;
  readonly categories: string[];
}

export interface State {
  readonly favourites: Joke[];
  readonly jokes: Joke[];
}

export const initialState: State = {
  favourites: undefined,
  jokes: undefined
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}
