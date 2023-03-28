import { dateValidate, nameValidate } from '../utils';

describe('check nameValidate function', () => {
  it('case: empty value', () => {
    expect(nameValidate('')).toBe(false);
  });
  it('case: 1 word', () => {
    expect(nameValidate('Ivan')).toBe(false);
  });
  it('case: 2 word in lowerCase', () => {
    expect(nameValidate('ivan ivanov')).toBe(false);
  });
  it('case: 1 word in lowerCase, 1 word in capitalize', () => {
    expect(nameValidate('ivan Ivanov')).toBe(false);
  });
  it('case: 2 word with < 3 symbols', () => {
    expect(nameValidate('Iv Iv')).toBe(false);
  });
  it('case: 1 word with < 3 symbols, 1 word with valid length', () => {
    expect(nameValidate('Iv Ivanov')).toBe(false);
  });
  it('case: valid name value', () => {
    expect(nameValidate('Ivan Ivanov')).toBe(true);
  });
});

describe('dateValidate function testing', () => {
  it('case: empty value', () => {
    expect(dateValidate('')).toBe(false);
  });
  it('case: year < 1900', () => {
    expect(dateValidate('1899-12-23')).toBe(false);
  });
  it('case: valid name value', () => {
    expect(dateValidate('2022-04-15')).toBe(true);
  });
});
