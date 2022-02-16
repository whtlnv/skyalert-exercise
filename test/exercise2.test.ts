import { numberToOrdinal } from '../src/exercise2';

describe('ordinal', () => {
  it('returns `0` for 0', () => {
    expect(numberToOrdinal(0)).toEqual('0');
  });

  it('respects 1st, 11th, 21st, 31st, 41st', () => {
    expect(numberToOrdinal(1)).toEqual('1st');
    expect(numberToOrdinal(11)).toEqual('11th');
    expect(numberToOrdinal(21)).toEqual('21st');
    expect(numberToOrdinal(31)).toEqual('31st');
    expect(numberToOrdinal(41)).toEqual('41st');
  });

  it('respects 2nd, 12th, 22nd, 32nd, 42nd', () => {
    expect(numberToOrdinal(2)).toEqual('2nd');
    expect(numberToOrdinal(12)).toEqual('12th');
    expect(numberToOrdinal(22)).toEqual('22nd');
    expect(numberToOrdinal(32)).toEqual('32nd');
    expect(numberToOrdinal(42)).toEqual('42nd');
  });

  it('respects 3rd, 13th, 23rd, 33rd, 43rd', () => {
    expect(numberToOrdinal(3)).toEqual('3rd');
    expect(numberToOrdinal(13)).toEqual('13th');
    expect(numberToOrdinal(23)).toEqual('23rd');
    expect(numberToOrdinal(33)).toEqual('33rd');
    expect(numberToOrdinal(43)).toEqual('43rd');
  });

  it('respects all others 4th, 16th, 55th, etc..', () => {
    expect(numberToOrdinal(4)).toEqual('4th');
    expect(numberToOrdinal(16)).toEqual('16th');
    expect(numberToOrdinal(27)).toEqual('27th');
    expect(numberToOrdinal(38)).toEqual('38th');
    expect(numberToOrdinal(49)).toEqual('49th');
  });

  it('respects the tens', () => {
    expect(numberToOrdinal(10)).toEqual('10th');
    expect(numberToOrdinal(20)).toEqual('20th');
    expect(numberToOrdinal(30)).toEqual('30th');
    expect(numberToOrdinal(40)).toEqual('40th');
    expect(numberToOrdinal(50)).toEqual('50th');
  });
  
  it('handles large integers', () => {
    expect(numberToOrdinal(10001)).toEqual('10001st');
    expect(numberToOrdinal(20011)).toEqual('20011th');
    expect(numberToOrdinal(30012)).toEqual('30012th');
    expect(numberToOrdinal(40021)).toEqual('40021st');
    expect(numberToOrdinal(50111)).toEqual('50111th');
    expect(numberToOrdinal(50003)).toEqual('50003rd');
    expect(numberToOrdinal(50013)).toEqual('50013th');
  });

  it('throws errors on negative numbers', () => {
    expect(() => {
      numberToOrdinal(-1);
    }).toThrowError('ordinal numbers must be positive');
  });
});
