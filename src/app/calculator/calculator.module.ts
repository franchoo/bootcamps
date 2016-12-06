import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalculatorComponent, ButtonComponent, ButtonComponent],
  exports: [CalculatorComponent]
})
export class CalculatorModule { }
