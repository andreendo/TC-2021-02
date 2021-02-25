const NumFinder = require('../lib/numFinder');

const numFinder = new NumFinder();

describe('NumFinder', () => {
    test('test a small array', () =>{
        numFinder.find([1,10]);
        expect(numFinder.biggest).toBe(10);
        expect(numFinder.smallest).toBe(1);
    });


    test('test a unordened array', () =>{
        numFinder.find([-99, 5, 1, 10, 300, -790, 6]);
        expect(numFinder.smallest).toBe(-790);
        expect(numFinder.biggest).toBe(300);
    });


    test('test empty array', () =>{
        expect(()=>{
            numFinder.find([]);
        }).toThrow('empty array');
    });

    
    test('test array with objects and numbers', () =>{
        expect(()=>{
            numFinder.find([1, 2, 3, { nome: 'João'}, 5, 6]);
        }).toThrow('invalid array');
    });
});
