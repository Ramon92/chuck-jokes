import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke-header',
  templateUrl: './joke-header.component.html',
  styleUrls: ['./joke-header.component.scss']
})
export class JokeHeaderComponent implements OnInit {
  @Output() public getJokes: EventEmitter<any> = new EventEmitter();
  @Output() public getJoke: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
