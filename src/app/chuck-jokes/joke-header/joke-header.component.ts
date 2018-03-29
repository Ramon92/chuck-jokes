import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke-header',
  templateUrl: './joke-header.component.html',
  styleUrls: ['./joke-header.component.scss']
})
export class JokeHeaderComponent implements OnInit {
  @Output() getJokes: EventEmitter<any> = new EventEmitter();
  @Output() getJoke: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
