/**
 * Convert the number into ordinal form using English rules.
 * @param n an intenger number to be transformed into ordinal
 * @returns a string containing the ordinal format of the
 */
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
