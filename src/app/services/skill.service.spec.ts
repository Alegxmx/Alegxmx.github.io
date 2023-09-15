import { TestBed } from '@angular/core/testing';

import { SkillService } from './skill.service';

describe('SkillService', () => {
  let service: SkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
