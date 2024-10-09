import randomness from ".";

describe("Randomness example", function () {
  test("x should be grater than 0", function () {
    const x = randomness();
    expect(x > 0).toBe(true);
  })
})