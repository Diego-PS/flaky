import time from ".";

describe("Time example", function () {
  test("should be an even time", function () {
    const parity = time();
    expect(parity).toBe("even");
  })
})