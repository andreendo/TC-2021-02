const NumFinder = require("../lib/numfinder");

const numFinder = new NumFinder();

describe("NumFinder", () => {
    test("test small array", () => {
        numFinder.find([1, 10]);
        expect(numFinder.smallest).toBe(1);
        expect(numFinder.biggest).toBe(10);
    });

    test("test an unordered array", () => {
        numFinder.find([-200, 500, -10, 0, 2500]);
        expect(numFinder.smallest).toBe(-200);
        expect(numFinder.biggest).toBe(2500);
    });

    test("test empty array", () => {
        expect(() => {
            numFinder.find([]);
        }).toThrow("empty array");
    });

    test("test array with objects and numbers", () => {
        expect(() => {
            numFinder.find([1, 2, 3, { name: "Danrlei" }, 4, 5]);
        }).toThrow("invalid array");
    });
});