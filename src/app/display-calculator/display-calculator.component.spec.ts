import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCalculatorComponent } from './display-calculator.component';

describe('DisplayCalculatorComponent', () => {
  let component: DisplayCalculatorComponent;
  let fixture: ComponentFixture<DisplayCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
