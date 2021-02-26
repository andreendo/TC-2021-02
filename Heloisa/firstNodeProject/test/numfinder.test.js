const NumFinder = require('../lib/numfinder');

const numfinder = new NumFinder();

describe('NumFinder', () =>{
    test('Teste pequeno array'.() => {
        numfinder.find([1,10]);
        expect(numfinder.smallest).toBe(1);
        expect(numfinder.biggest).toBe(10);
        
    });

    test('Teste pequeno array'.() => {
        numfinder.find([99,5, 1, 10, 300, -790, 6]);
        expect(numfinder.smallest).toBe(-790);
        expect(numfinder.biggest).toBe(300);
        
    });
    
    test('Teste excecao'.() => {
        numfinder.find([]);
        expect(() =>{
            numfinder.find([];)
        }).toThrow('empty array');
    });

    test('Teste array with objects and numbers'.() => {
        numfinder.find([]);
        expect(() => {
            numfinder. find([1,2,3,{ nome: 'Joao' }, 5,6])
        }).toThrow('invalid array');
    });
    
    
});