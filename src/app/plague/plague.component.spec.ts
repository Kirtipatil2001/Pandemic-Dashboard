import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagueComponent } from './plague.component';

describe('PlagueComponent', () => {
  let component: PlagueComponent;
  let fixture: ComponentFixture<PlagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
