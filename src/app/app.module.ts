import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ButtonsCalculatorComponent } from "./buttons-calculator/buttons-calculator.component";
import { DisplayCalculatorComponent } from "./display-calculator/display-calculator.component";
import { NumbersClaculatorComponent } from "./numbers-claculator/numbers-claculator.component";
import { OperationsCalculatorComponent } from "./operations-calculator/operations-calculator.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonsCalculatorComponent,
    DisplayCalculatorComponent,
    NumbersClaculatorComponent,
    OperationsCalculatorComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
