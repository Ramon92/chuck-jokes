import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  constructor() {}

  hasIncreasingLetters(password: string) {
    const letters = 'abcdefghijklmnopqrstuvwxyx';
    let hasSlice: boolean;
    letters.split('').forEach((letter, index) => {
      const slice = letters.slice(index, index + 3);
      if (slice.length === 3 && !hasSlice) {
        hasSlice = password.includes(slice);
      }
    });
    return hasSlice;
  }

  checkCharacters(password): boolean {
    const confusionRe = /(?=.*([a-z])\1{1,}.*)(?!(.*[oil].*)+)^([a-z]){1,32}$/;
    return confusionRe.test(password);
  }

  isPasswordValid(password) {
    const increasingeLetters = this.hasIncreasingLetters(password);
    const characters = this.checkCharacters(password);
    return increasingeLetters && characters;
  }
}
