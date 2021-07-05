import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { PlagueService } from './plague.service';

describe('PlagueService', () => {
  let service: PlagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[PlagueService]
    });
    service = TestBed.inject(PlagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
