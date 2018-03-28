import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromJokes from './jokes.reducer';

export interface State {
  jokes: fromJokes.State;
}

export const reducers: ActionReducerMap<State> = {
  jokes: fromJokes.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
