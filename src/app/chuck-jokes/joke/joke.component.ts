import { Joke } from './../../reducers/jokes.reducer';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent {
  @Input() public joke: Joke;
  @Output() public addJoke: EventEmitter<any> = new EventEmitter();
}
