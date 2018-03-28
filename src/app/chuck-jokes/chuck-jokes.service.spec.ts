/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChuckJokesService } from './chuck-jokes.service';

describe('Service: ChuckJokes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChuckJokesService]
    });
  });

  it('should ...', inject([ChuckJokesService], (service: ChuckJokesService) => {
    expect(service).toBeTruthy();
  }));
});