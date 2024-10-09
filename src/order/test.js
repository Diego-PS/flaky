import order from ".";

describe('Async Wait example', function () {
  let x = 'a';

  test('should return b', function () {
    x = order(x);
    expect(x).toBe('b');
  });

  test('should return a', function () {
    x = order(x);
    expect(x).toBe('a');
  })
})