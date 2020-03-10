const NumFinder = require('../lib/numfinder');

describe('NumFinder', () => {
    test('com um array ordenado', () => {
        let numFinder = new NumFinder();
        numFinder.find([1, 10]);
        expect(numFinder.menor).toBe(1);
        expect(numFinder.maior).toBe(10);
    });

    test('com um array desordenado', () => {
        let numFinder = new NumFinder();
        numFinder.find([50, 1, 10, 5]);
        expect(numFinder.menor).toBe(1);
        expect(numFinder.maior).toBe(50);
    });
});

