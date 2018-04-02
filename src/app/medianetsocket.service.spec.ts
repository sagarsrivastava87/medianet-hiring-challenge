import { TestBed, inject } from '@angular/core/testing';

import { MedianetsocketService } from './medianetsocket.service';

describe('MedianetsocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedianetsocketService]
    });
  });

  it('should be created', inject([MedianetsocketService], (service: MedianetsocketService) => {
    expect(service).toBeTruthy();
  }));
});
