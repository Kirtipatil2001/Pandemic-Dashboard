import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagueDashComponent } from './plague-dash.component';

describe('PlagueDashComponent', () => {
  let component: PlagueDashComponent;
  let fixture: ComponentFixture<PlagueDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlagueDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlagueDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
