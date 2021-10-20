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

const isValidExpression = (
  expression: string,
  candidateText: string
): boolean => {
  const expressionSymbols = ['+', '-', 'x', '/', ','];

  const lastValue = expression.slice(-1);

  const isCandidateRepeatSymbol =
    expressionSymbols.includes(lastValue) &&
    expressionSymbols.includes(candidateText);

  const validExpressionPattern = /^(((\d+)|-|\+|x|\/|(?:x)|(,))+)$/g;
  const isValidExpression =
    validExpressionPattern.test(candidateText) && !isCandidateRepeatSymbol;

  const invalidSymbolsAsFirstValue = ['x', '/'];

  const isValidFirstValue =
    isValidExpression && !invalidSymbolsAsFirstValue.includes(candidateText);

  const isEmptyExpression = expression === '';
  if (isEmptyExpression) {
    return isValidFirstValue;
  }

  const hasTwoFactors =
    !!Array.from(expression).find(
      (expressionValue, index) =>
        expressionSymbols.includes(expressionValue) && index !== 0
    ) && !expressionSymbols.includes(candidateText);

  return !!isValidExpression;
};
export {
  calculate,
  getOperationBySymbol,
  expressionSymbols,
  MathExpressionSymbols,
  isValidExpression,
};
