import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styles: [
    '.row {margin: 15px -15px;}',
    '.result {height: 67px; font-size: 44px; text-align: right; width: 100%; box-shadow: inset 3px 3px rgba(0, 0, 0, 0.2);}']
})
export class CalculatorComponent implements OnInit {
  expression:string

  constructor() { }

  ngOnInit() {
    this.expression = ''
  }

  update(digit) {
    this.expression += digit
  }

}
