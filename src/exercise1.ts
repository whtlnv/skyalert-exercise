
/**
 * Obfuscates a credit card number using 'x' symbols when needed.
 * 
 * Only first and last four characters are left on strings greater than 7 characters,
 * otherwise string is left intact.
 * 
 * @param creditCardNumber a string containing only digits to be masked.
 * @returns a masked credit card number using 'x' as obfuscator.
 */
export const maskify = (creditCardNumber: string): string => {
    if (!creditCardNumber.match(/^\d+$/)) {
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