// I don't know why but it expects that blah test exist (????????)
export const sum = (a: number, b: number) => {
  return a + b;
};

export const maskify = (creditCardNumber: string): string => {
  if(!creditCardNumber.match(/^\d+$/)) {
    throw Error('Credit card number can only contain digits');
  }

  const creditCardNumberLength = creditCardNumber.length;
  if (creditCardNumberLength < 7) {
    return creditCardNumber;
  }

  return (
    creditCardNumber.substring(0, 1) +
    'x'.repeat(creditCardNumberLength - 5) +
    creditCardNumber.substring(
      creditCardNumberLength - 4,
      creditCardNumberLength
    )
  );
};

export const numberToOrdinal = (n: number): string => {
  if (n < 0) {
    throw new Error('ordinal numbers must be positive');
  }

  const nStr = String(n);
  const exceptions: { [key: string]: string } = {
    '0': '0',
    '11': '11th',
    '12': '12th',
    '13': '13th',
  };
  if (nStr in exceptions) {
    return exceptions[nStr];
  }

  const suffixes: { [key: string]: string } = {
    '1': 'st',
    '2': 'nd',
    '3': 'rd',
  };
  const lastDigit: string = nStr.substring(nStr.length - 1, nStr.length);
  return nStr + (lastDigit in suffixes ? suffixes[lastDigit] : 'th');
};

class MalformedExprError extends Error {}

export const operators: {
  [key: string]: (left: number, right: number) => number;
} = {
  '+': (left: number, right: number): number => left + right,
  '-': (left: number, right: number): number => left - right,
  '*': (left: number, right: number): number => left * right,
  '/': (left: number, right: number): number => {
    if (right === 0) {
      throw new MalformedExprError('Division by zero');
    }

    return left / right;
  },
};

export const calculate = (expr: string): number => {
  if (expr === '') {
    throw new MalformedExprError(`No operations provided`);
  }

  const stack: number[] = [];
  const tokens = expr.split(' ');
  const isNumber = (token: string) => token.match(/-?\d+/);
  const isOperator = (token: string) => token in operators;

  let location = 0;
  for (const token of tokens) {
    if (isNumber(token)) {
      stack.push(Number(token));
    } else if (isOperator(token)) {
      const right: number | undefined = stack.pop();
      if (right === undefined) {
        throw new MalformedExprError(
          `Error at pos ${location}, no right operator available`
        );
      }

      const left: number | undefined = stack.pop();
      if (left === undefined) {
        throw new MalformedExprError(
          `Error at pos ${location}, no left operator available`
        );
      }

      const result = operators[token](left, right);
      stack.push(result);
    } else {
      throw new MalformedExprError(
        `Error at pos ${location}, unknown token: "${token}", was expecting operator or operand`
      );
    }

    location += token.length;
  }

  return stack.pop() || 0;
};
