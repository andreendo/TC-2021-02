const NumFinder = require("../lib/numFinder");

const numFinder = new NumFinder();

describe('NumFinder', () => {
  test('test a small array', () => {
    numFinder.find([1, 10]);
    expect(numFinder.smallest).toBe(1);
    expect(numFinder.biggest).toBe(10);
  });

  test("test an unordered array", () => {
    numFinder.find([945, -777, 24, 0, -34, -7, 295, 2021, -144]);
    expect(numFinder.smallest).toBe(-777);
    expect(numFinder.biggest).toBe(2021);
  });

  test("test empty array", () => {
    expect(() => {
      numFinder.find([]);
    }).toThrow("empty array");
  });

  test("test array with objects and numbers", () => {
    expect(() => {
      numFinder.find([1, 2, 3, { name: "UTFPR" }, 4, 5]);
    }).toThrow("invalid array");
  });
});