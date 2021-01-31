import { TestBed } from '@angular/core/testing';

import { DevelopmentApiService } from './development-api.service';

describe('DevelopmentApiService', () => {
  let service: DevelopmentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopmentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
