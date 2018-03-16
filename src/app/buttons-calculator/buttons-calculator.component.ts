import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-buttons-calculator",
  templateUrl: "./buttons-calculator.component.html",
  styleUrls: ["./buttons-calculator.component.css"]
})
export class ButtonsCalculatorComponent implements OnInit {
  @Output() numberUpdated: EventEmitter<Number>;
  constructor() {
    this.numberUpdated = new EventEmitter();
  }

  ngOnInit() {}
  updateNumber(event) {
    this.numberUpdated.emit(event);
  }
}
