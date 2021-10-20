import { Component } from '@angular/core';
import { isValidExpression } from 'src/utils/calculator';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  expression = '';

  constructor() {}

  calculate() {
    alert('calculate');
  }

  addExpressionValue(value: string) {
    const newExpression = `${this.expression}${value}`;

    if (isValidExpression(newExpression)) {
      this.expression = newExpression;
    }
  }

  removeLastCharFromExpression() {
    this.expression = this.expression.slice(0, -1);
  }

  clearExpression() {
    this.expression = '';
  }
}
