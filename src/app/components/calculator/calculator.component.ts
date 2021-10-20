import { Component } from '@angular/core';
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
    const newExpression = `${this.expression}${value}`;

    const isValidExpression = (candidateText: string): boolean => {
      const expressionSymbols = ['+', '-', 'x', '/', ','];

      const lastValue = this.expression.slice(-1);

      const isCandidateRepeatSymbol =
        expressionSymbols.includes(lastValue) &&
        expressionSymbols.includes(candidateText);

      const validExpressionPattern = /^(((\d+)|-|\+|x|\/|(?:x)|(,))+)$/g;
      const isValidExpression =
        validExpressionPattern.test(candidateText) && !isCandidateRepeatSymbol;

      const invalidSymbolsAsFirstValue = ['x', '/'];

      const isValidFirstValue =
        isValidExpression &&
        !invalidSymbolsAsFirstValue.includes(candidateText);

      // if (this.isEmptyExpression()) {
      //   if (isValidFirstValue) {
      //     this.expression += candidateText;
      //   }

      //   return true;
      // }
      // dont touch this, idk why it works
      const hasTwoFactors =
        Array.from(this.expression).find(
          (symbol, index) => expressionSymbols.includes(symbol) && index !== 0
        ) && expressionSymbols.includes(candidateText);

      // if (hasTwoFactors) {
      //   return;
      // }
      // if (isValidExpression) {
      //   expression.value += candidateText;
      //   return;
      // }
      return true;
    };

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
