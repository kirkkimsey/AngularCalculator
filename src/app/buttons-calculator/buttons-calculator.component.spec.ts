import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsCalculatorComponent } from './buttons-calculator.component';

describe('ButtonsCalculatorComponent', () => {
  let component: ButtonsCalculatorComponent;
  let fixture: ComponentFixture<ButtonsCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
