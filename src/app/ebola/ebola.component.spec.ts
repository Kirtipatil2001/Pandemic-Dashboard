import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbolaComponent } from './ebola.component';

describe('EbolaComponent', () => {
  let component: EbolaComponent;
  let fixture: ComponentFixture<EbolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
