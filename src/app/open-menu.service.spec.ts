import { TestBed } from '@angular/core/testing';

import { OpenMenuService } from './open-menu.service';

describe('OpenMenuService', () => {
  let service: OpenMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
