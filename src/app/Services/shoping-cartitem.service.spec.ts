import { TestBed } from '@angular/core/testing';

import { ShopingCartitemService } from './shoping-cartitem.service';

describe('ShopingCartitemService', () => {
  let service: ShopingCartitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopingCartitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
