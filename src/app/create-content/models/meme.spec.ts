/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Meme } from './meme';

describe('Meme', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Meme]
    });
  });

  it('should ...', inject([Meme], (service: Meme) => {
    expect(service).toBeTruthy();
  }));
});
