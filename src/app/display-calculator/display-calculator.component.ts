import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { Operator } from "rxjs/Operator";

@Component({
  selector: "app-display-calculator",
  templateUrl: "./display-calculator.component.html",
  styleUrls: ["./display-calculator.component.css"]
})
export class DisplayCalculatorComponent implements OnInit {
  operation: number;
  @Output() numberUpdated: EventEmitter<[any]>;

  @Input() number: Number;
  @Input() register: Number;

  constructor() {
    this.numberUpdated = new EventEmitter();
    this.number = 0;
    this.operation = 0;
  }
  onKey(event) {
    console.log(event.key);
    this.numberUpdated.emit([this.number, this.operation]);
  }
  ngOnInit() {}
}
