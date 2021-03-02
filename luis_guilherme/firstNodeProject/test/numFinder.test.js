const NumFinder = require("../lib/numFinder");

const numFinder = new NumFinder();

describe("test NumFinder class", () => {
  test("test small array", () => {
    numFinder.find([1, 10]);
    expect(numFinder.smallest).toBe(1);
    expect(numFinder.biggest).toBe(10);
  });

  test("test an unordered array", () => {
    numFinder.find([-1, 1, 0, 100, 200, 5]);
    expect(numFinder.smallest).toBe(-1);
    expect(numFinder.biggest).toBe(200);
  });

  test("test empty array", () => {
    expect(() => {
      numFinder.find([]);
    }).toThrow("empty array");
  });

  test("test array with objects and numbers", () => {
    expect(() => {
      numFinder.find([1, { config: {} }, -2, 3]);
    }).toThrow("invalid array");
  });
});