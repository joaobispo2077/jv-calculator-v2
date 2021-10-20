type MathExpressionSymbols = 'x' | '/' | '+' | '-';

const expressionSymbols = ['+', '-', 'x', '/', ','];

function getOperationBySymbol(symbol: MathExpressionSymbols) {
  type MathOperation = (a: number, b: number) => number;

  const mathOperationBySymbol: Record<MathExpressionSymbols, MathOperation> = {
    x: (a, b) => Number(`${a}${b}`),
    '/': (a, b) => Number(`${a}${b}`),
    '+': (a, b) => Number(`${a}${b}`),
    '-': (a, b) => Number(`${a}${b}`),
  };

  return mathOperationBySymbol[symbol];
}

function calculate(expression: string) {
  const satinizedExpression = expression.replace(/,/, '.').replace(/,/, '');

  const foundFirstSymbol = Array.from(satinizedExpression).find(
    (symbol, index) => expressionSymbols.includes(symbol) && index !== 0
  );

  const mathOperate = getOperationBySymbol(
    foundFirstSymbol as MathExpressionSymbols
  );

  const [firstNumber, secondNumber] = satinizedExpression.split(
    foundFirstSymbol as MathExpressionSymbols
  );

  const result = mathOperate(Number(firstNumber), Number(secondNumber));

  return result.toString().replace('.', ',');
}

function isValidExpression(expression: string): boolean {
  // const candidateText = expression;
  // const lastValue = candidateText.slice(-1);
  // const isCandidateRepeatSymbol =
  //   expressionSymbols.includes(lastValue) &&
  //   expressionSymbols.includes(candidateText);
  // const validExpressionPattern = /^(((\d+)|-|\+|x|\/|(?:x)|(,))+)$/g;
  // const isValidExpression =
  //   validExpressionPattern.test(candidateText) && !isCandidateRepeatSymbol;
  // const invalidSymbolsAsFirstValue = ['x', '/'];
  // const isValidFirstValue =
  //   isValidExpression && !invalidSymbolsAsFirstValue.includes(candidateText);
  // if (isEmptyExpression.value) {
  //   if (isValidFirstValue) {
  //     expression.value += candidateText;
  //   }
  //   return;
  // }
  // // dont touch this, idk why it works
  // const hasTwoFactors =
  //   Array.from(expression.value).find(
  //     (symbol, index) => expressionSymbols.includes(symbol) && index !== 0
  //   ) && expressionSymbols.includes(candidateText);
  // if (hasTwoFactors) {
  //   return;
  // }
  // if (isValidExpression) {
  //   expression.value += candidateText;
  //   return;
  // }
  return true;
}
export {
  calculate,
  getOperationBySymbol,
  expressionSymbols,
  MathExpressionSymbols,
  isValidExpression,
};
