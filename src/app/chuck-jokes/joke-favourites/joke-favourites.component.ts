import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke-favourites',
  templateUrl: './joke-favourites.component.html',
  styleUrls: ['./joke-favourites.component.scss']
})
export class JokeFavouritesComponent implements OnInit {
  @Input() public favourites: any;
  @Output() public remove: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
