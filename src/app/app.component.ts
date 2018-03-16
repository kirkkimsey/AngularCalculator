import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  number: number = 0;
  register = 0;
  add: any = 0;
  operationClickFlag: boolean;
  operationRegister: string;
  constructor() {}
  ngOnInit() {}
  operationClicked(inkey) {
    console.log(this.operationClickFlag);
    console.log(this.operationRegister);
    console.log(this.register);
    if (this.operationClickFlag) {
      if (this.operationRegister == "+") {
        this.number = this.number + this.register;
      }
      if (this.operationRegister == "-") {
        this.number = this.number - this.register;
      }
      if (this.operationRegister == "*") {
        this.number = this.number * this.register;
      }
      if (this.operationRegister == "÷") {
        this.number = this.number / this.register;
      }
    }
    this.operationClickFlag = true;
    this.register = this.number;
    this.operationRegister = inkey;
    console.log(inkey);
  }

  updateNumber(event) {
    console.log(event);
    this.number = event[0];
    if (event[1] != "") {
      this.operationClicked(event[1]);
    }
  }
  updateRegister(event) {
    console.log(event);
    this.register = event;
  }
  updateOperation(event) {
    console.log(event);
  }
}
