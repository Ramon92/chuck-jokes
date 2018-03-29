import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ChuckJokesService {
  constructor(private http: HttpClient) {}

  getJokes(): Observable<any> {
    return this.http.get('http://api.icndb.com/jokes/random/10');
  }

  getJoke(): Observable<any> {
    return this.http.get('http://api.icndb.com/jokes/random/1');
  }
}
