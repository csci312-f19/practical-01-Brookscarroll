/* eslint-disable no-global-assign, no-underscore-dangle */
const birthday = require('./index');

describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });
  // For tests, "today" means 01 Jan 2018
  test('Returns 0 if birthday is 01 Jan 2018', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });
  test('Returns 1 if birthday is 01 Jan 2017', () => {
    expect(birthday.howOld(new Date('01 Jan 2017'))).toBe(1);
  });
  test('Returns 0 if birthday is 05 Dec 2017', () => {
    expect(birthday.howOld(new Date('05 Dec 2017'))).toBe(0);
  });
  test('Returns 1 if birthday is 05 Jan 2016', () => {
    expect(birthday.howOld(new Date('05 Jan 2016'))).toBe(1);
  });
  test('Returns 20 if birthday is 01 Jan 1998', () => {
    expect(birthday.howOld(new Date('01 Jan 1998'))).toBe(20);
  });
});
