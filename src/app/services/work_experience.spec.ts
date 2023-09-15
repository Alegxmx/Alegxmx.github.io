import { TestBed } from '@angular/core/testing';

import { WorkExperience } from './work_experience.service';

describe('WorkExperience', () => {
  let service: WorkExperience;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkExperience);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
