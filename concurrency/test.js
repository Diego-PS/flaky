import concurrency from ".";

describe('Concurrency example', function () {
  test('x should be 1', async function () {
    const x = await concurrency();
    expect(x).toBe(1);
  })
})