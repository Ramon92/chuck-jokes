import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor() {}

  canActivate() {
    const sessionActive = sessionStorage.getItem('loggedIn');
    if (sessionActive && sessionActive === 'true') {
      return true;
    }
    return false;
  }
}
