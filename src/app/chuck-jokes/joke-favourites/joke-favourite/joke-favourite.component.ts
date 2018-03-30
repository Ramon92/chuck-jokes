import { Joke } from './../../../reducers/jokes.reducer';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke-favourite',
  templateUrl: './joke-favourite.component.html',
  styleUrls: ['./joke-favourite.component.scss']
})
export class JokeFavouriteComponent implements OnInit {
  @Input() public favourite: Joke;
  @Output() public remove: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
