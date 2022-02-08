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

export const numberToOrdinal = (n: number): String => {
  return String(n);
};