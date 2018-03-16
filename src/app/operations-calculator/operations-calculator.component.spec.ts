import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsCalculatorComponent } from './operations-calculator.component';

describe('OperationsCalculatorComponent', () => {
  let component: OperationsCalculatorComponent;
  let fixture: ComponentFixture<OperationsCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
