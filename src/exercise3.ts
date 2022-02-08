class MalformedExprError extends Error {}

/**
 * Define here your custom operators, or push a new entry directly from your package.
 */
export var operators: {
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

/**
 * Calculate the result of a reverse-polish notation string, supported operators are `+`,
 * `-`, `*` and `/`, to extend the operators add it to `operators` array in this module.
 * All operators require two arguments (left and right), if only one operator is avaliable at
 * any time, this function will throw an MalformedExprError.
 * Operands and operators are considerated any strings between spaces.
 * @param expr A reverse-polish notation string containing standard arithmetic operations
 * @returns The result of evaluation the expression
 */
export const calculate = (expr: string): number => {
  if (expr === '') {
    throw new MalformedExprError(`No operations provided`);
  }

  const stack: number[] = [];
  const tokens = expr.split(' ');
  const isNumber = (token: string) => token.match(/^-?\d+$/);
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
