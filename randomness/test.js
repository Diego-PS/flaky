import randomness from ".";

describe('Randomness example', function () {
  test('x should be grater than 0', async function () {
    const x = await randomness();
    expect(x > 0).toBe(true);
  })
})