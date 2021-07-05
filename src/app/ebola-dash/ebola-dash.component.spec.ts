import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbolaDashComponent } from './ebola-dash.component';

describe('EbolaDashComponent', () => {
  let component: EbolaDashComponent;
  let fixture: ComponentFixture<EbolaDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbolaDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbolaDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
