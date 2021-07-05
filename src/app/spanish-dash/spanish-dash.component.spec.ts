import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishDashComponent } from './spanish-dash.component';

describe('SpanishDashComponent', () => {
  let component: SpanishDashComponent;
  let fixture: ComponentFixture<SpanishDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
