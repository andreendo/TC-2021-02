const NumFinder = require('../lib/numFinder');
const numFinder = new NumFinder();

describe('NumFinder', ()=>{
    test('test a small array', ()=>{
        numFinder.find([1,10]);
        expect(numFinder.biggest).toBe(10);
        expect(numFinder.smallest).toBe(1);
    });

    test('test aa unordered array', ()=>{
        numFinder.find([-17,210, 78, -66, 0, 98]);
        expect(numFinder.biggest).toBe(210);
        expect(numFinder.smallest).toBe(-66);
    });

    test('test empty array', ()=>{
        expect(()=>{
            numFinder.find([]);
        }).toThrow('empty array');    
        
    });

    test('test array with objects and numbers', ()=>{
        expect(()=>{
                numFinder.find([1, 2 , 3, {nome: 'Vladimir'}]);
        }).toThrow('invalid array');

    });

});