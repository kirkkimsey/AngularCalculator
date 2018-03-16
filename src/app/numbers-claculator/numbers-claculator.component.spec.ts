import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersClaculatorComponent } from './numbers-claculator.component';

describe('NumbersClaculatorComponent', () => {
  let component: NumbersClaculatorComponent;
  let fixture: ComponentFixture<NumbersClaculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersClaculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersClaculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
