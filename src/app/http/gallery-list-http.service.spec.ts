/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GalleryListHttpService } from './gallery-list-http.service';

describe('GalleryListHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalleryListHttpService]
    });
  });

  it('should ...', inject([GalleryListHttpService], (service: GalleryListHttpService) => {
    expect(service).toBeTruthy();
  }));
});
