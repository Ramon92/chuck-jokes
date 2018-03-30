import * as fromJokesActions from './../actions/jokes.actions';
import * as fromJokes from './../reducers/jokes.reducer';
import { State } from './../reducers/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-chuck-jokes',
  templateUrl: './chuck-jokes.component.html',
  styleUrls: ['./chuck-jokes.component.scss']
})
export class ChuckJokesComponent implements OnInit {
  public currentState: fromJokes.State;
  private toggleSub: Subscription;
  private jokeToggle: any = false;

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

  toggleJoke() {
    this.jokeToggle = !this.jokeToggle;

    if (this.jokeToggle) {
      this.toggleSub = interval(5000).subscribe(() => {
        if (this.currentState.favourites.length < 10) {
          this.store.dispatch(new fromJokesActions.GetJoke());
        }
      });
    } else {
      this.toggleSub.unsubscribe();
    }
  }

  removeJoke(id) {
    this.store.dispatch(new fromJokesActions.RemoveJoke(id));
  }

  addFavourite(joke) {
    if (this.currentState.favourites.length < 10) {
      this.store.dispatch(new fromJokesActions.AddJoke(joke));
    }
  }
}
