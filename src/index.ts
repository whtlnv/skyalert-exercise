// I don't know why but it expects that blah test exist (????????)
export const sum = (a: number, b: number) => {
  return a + b;
};

export const maskify = (creditCardNumber: String): String => {
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
