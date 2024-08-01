import { TestBed } from '@angular/core/testing';

import { BasketitemscountService } from './basketitemscount.service';

describe('BasketitemscountService', () => {
  let service: BasketitemscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketitemscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
