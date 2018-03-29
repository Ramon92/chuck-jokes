import * as fromJokesActions from './../actions/jokes.actions';
import * as fromJokes from './../reducers/jokes.reducer';
import { State } from './../reducers/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-chuck-jokes',
  templateUrl: './chuck-jokes.component.html',
  styleUrls: ['./chuck-jokes.component.scss']
})
export class ChuckJokesComponent implements OnInit {
  public currentState: fromJokes.State;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store
      .select((state: State) => state.jokes)
      .subscribe((state: fromJokes.State) => {
        this.currentState = state;
      });
  }

  getJokes() {
    this.store.dispatch(new fromJokesActions.GetJokes());
  }

  getJoke() {
    this.store.dispatch(new fromJokesActions.GetJoke());
  }
}
