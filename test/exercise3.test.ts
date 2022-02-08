import { calculate } from '../src';

describe('reverse polish notation calculator', () => {
  it('adds numbers', () => {
    expect(calculate('1 1 +')).toEqual(2);
    expect(calculate('1 1 1 + +')).toEqual(3);
    expect(calculate('1 2 3 + +')).toEqual(6);
  });

  it('substracts numbers', () => {
    expect(calculate('1 1 -')).toEqual(0);
    expect(calculate('2 1 -')).toEqual(1);
    expect(calculate('1 1 1 - -')).toEqual(1); // 1 - (1 - 1)
    expect(calculate('1 2 3 - -')).toEqual(2); // 1 - (2 - 3)
  });

  it('multiplies numbers', () => {
    expect(calculate('2 2 *')).toEqual(4);
    expect(calculate('2 2 2 * *')).toEqual(8);
    expect(calculate('1 2 3 4 * * *')).toEqual(24);
  });

  it('divides numbers', () => {
    expect(calculate('2 2 /')).toEqual(1);
    expect(calculate('6 2 1 / /')).toEqual(3);
  });

  it('calculates mixed operations', () => {
    expect(calculate('6 1 2 1 - + * 3 /')).toEqual(4); // (6 * (1 + (2 - 1))) / 3
  });

  it('calculates the given cases correctly', () => {
    expect(calculate('3')).toEqual(3);
    expect(calculate('3 4 +')).toEqual(7);
    expect(calculate('2 9 5 + -')).toEqual(-12);
  });

  it('fails when giving malfored expressions', () => {
    expect(() => calculate('+')).toThrowError(
      'Error at pos 0, no right operator available'
    );
    expect(() => calculate('1 +')).toThrowError(
      'Error at pos 1, no left operator available'
    );
    expect(() => calculate('')).toThrowError('No operations provided');
    expect(() => calculate('1 0 /')).toThrowError('Division by zero');
  });
});
