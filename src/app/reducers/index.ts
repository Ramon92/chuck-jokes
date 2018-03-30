import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
import * as fromJokes from './jokes.reducer';

export interface Action {
  readonly type: string;
  readonly payload?: any;
}
export interface State {
  jokes: fromJokes.State;
}

export const reducers: ActionReducerMap<State> = {
  jokes: fromJokes.reducer
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [{ jokes: ['favourites'] }],
    rehydrate: true,
    storage: sessionStorage
  })(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [localStorageSyncReducer]
  : [localStorageSyncReducer];
