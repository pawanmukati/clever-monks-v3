import { TestBed } from '@angular/core/testing';

import { CompanySmtpService } from './company-smtp.service';

describe('CompanySmtpService', () => {
  let service: CompanySmtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanySmtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
