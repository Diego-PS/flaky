import wait from ".";

jest.setTimeout(1000);

describe("Async Wait example", function () {
  test("should be a fact", async function () {
    const fact = await wait();
    expect(fact.type).toBe("fact");
  })
})