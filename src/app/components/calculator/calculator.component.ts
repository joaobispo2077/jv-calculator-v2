import { Component } from '@angular/core';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  expression = 'sdfsadfasd';

  constructor() {}

  calculate() {
    alert('calculate');
  }

  addExpressionValue(value: string) {
    console.log('addExpressionValue', value);
  }

  removeLastCharFromExpression() {
    console.log('removeLastCharFromExpression');
  }

  clearExpression() {
    this.expression = '';
  }
}
