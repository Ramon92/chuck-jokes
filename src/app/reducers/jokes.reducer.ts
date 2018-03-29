import { Action } from './index';
import { JokesActionTypes } from './../actions/jokes.actions';

export interface Joke {
  readonly id: number;
  readonly joke: string;
  readonly categories: string[];
}

export interface State {
  readonly favourites: Joke[];
  readonly jokes: Joke[];
  readonly isLoading: boolean;
  readonly error: boolean;
}

export const initialState: State = {
  favourites: undefined,
  jokes: undefined,
  isLoading: false,
  error: false
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case JokesActionTypes.GET_JOKES:
      return {
        ...state,
        error: false,
        isLoading: true
      };

    case JokesActionTypes.GET_JOKES_SUCCESS:
    case JokesActionTypes.GET_JOKE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jokes: action.payload.value
      };

    case JokesActionTypes.GET_JOKES_FAILED:
    case JokesActionTypes.GET_JOKE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true
      };

    case JokesActionTypes.REMOVE_JOKE:
      const favourites = state.favourites.filter(
        (joke: Joke) => joke.id !== action.payload
      );
      return {
        ...state,
        favourites
      };

    case JokesActionTypes.ADD_JOKE:
      const newList = [...state.favourites, action.payload];
      return {
        ...state,
        favourites: newList
      };

    default:
      return state;
  }
}
