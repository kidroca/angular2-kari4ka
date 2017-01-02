/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppImageService } from './app-image.service';

describe('AppImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppImageService]
    });
  });

  it('should ...', inject([AppImageService], (service: AppImageService) => {
    expect(service).toBeTruthy();
  }));
});
