import { maskify } from '../src';

describe('maskify', () => {
  it('mask all digits except for first and last four digits of strings greater than 7 characters', () => {
    expect(maskify('5234123412349876')).toEqual('5xxxxxxxxxxx9876');
  });

  it('mask all digits except for first and last four digits for string of 8 and 7 charcters', () => {
    expect(maskify('12345678')).toEqual('1xxx5678');
    expect(maskify('1234567')).toEqual('1xxxx67');
  });

  it('does not mask any digits if string is less than 7 characters', () => {
    expect(maskify('123456')).toEqual('123456');
  });
});
