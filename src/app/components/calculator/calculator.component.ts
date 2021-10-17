import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  removeLastCharFromExpression() {
    console.log('removeLastCharFromExpression');
  }

  addExpressionValue(value: string) {
    console.log('addExpressionValue', value);
  }

  clearExpression() {
    console.log('clearExpression');
  }

  ngOnInit(): void {
    console.log('CalculatorComponent');
  }
}
