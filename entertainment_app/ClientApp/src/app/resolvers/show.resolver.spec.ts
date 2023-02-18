import { TestBed } from '@angular/core/testing';

import { ShowResolver } from './show.resolver';

describe('ShowResolver', () => {
  let resolver: ShowResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ShowResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
