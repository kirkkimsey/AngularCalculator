import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-numbers-claculator",
  templateUrl: "./numbers-claculator.component.html",
  styleUrls: ["./numbers-claculator.component.css"]
})
export class NumbersClaculatorComponent implements OnInit {
  add: any = 0;
  register: any = 0;
  number: any = 0;
  decimalCounter = 0;
  dotPressed = false;
  operationClickFlag: boolean;
  operationRegister: string;
  @Output() numberUpdated: EventEmitter<[any]>;
  @Output() registerUpdated: EventEmitter<Number>;
  constructor() {
    this.numberUpdated = new EventEmitter();
    this.registerUpdated = new EventEmitter();
  }

  ngOnInit() {}
  operationClicked(inKey) {
    this.numberUpdated.emit([this.number, inKey]);
    this.number = 0;
  }
  numberClicked(inKey) {
    if (this.dotPressed) {
      this.decimalCounter++;
      this.number = this.number + inKey / Math.pow(10, this.decimalCounter);
    } else {
      this.number = this.number * 10 + Number(inKey);
    }
    this.numberUpdated.emit([this.number, ""]);
  }
  dotClicked() {
    this.dotPressed = true;
  }
  negateClicked() {
    this.number = this.number * -1;
    this.numberUpdated.emit([this.number, ""]);
  }
}
