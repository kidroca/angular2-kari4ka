/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FileDropDirective } from './file-drop.directive';
import {ElementRef} from '@angular/core';

describe('FileDropDirective', () => {
  it('should create an instance', () => {
    let directive = new FileDropDirective(new ElementRef(new Image()));
    expect(directive).toBeTruthy();
  });
});
