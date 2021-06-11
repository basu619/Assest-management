import { TestBed } from '@angular/core/testing';

import { FieldsserviceService } from './fieldsservice.service';

describe('FieldsserviceService', () => {
  let service: FieldsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
