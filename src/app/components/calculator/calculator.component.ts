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

  isEmptyExpression(): boolean {
    return this.expression === '';
  }

  addExpressionValue(value: string) {
    if (isValidExpression(this.expression, value)) {
      const newExpression = `${this.expression}${value}`;

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
