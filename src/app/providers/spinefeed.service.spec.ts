import { TestBed } from '@angular/core/testing';

import { SpinefeedService } from './spinefeed.service';

describe('SpinefeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpinefeedService = TestBed.get(SpinefeedService);
    expect(service).toBeTruthy();
  });
});
