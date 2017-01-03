/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ErrorDefinitionService } from './error-definition.service';

describe('ErrorDefinitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorDefinitionService]
    });
  });

  it('should ...', inject([ErrorDefinitionService], (service: ErrorDefinitionService) => {
    expect(service).toBeTruthy();
  }));
});
