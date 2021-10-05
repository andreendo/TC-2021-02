const gerarEstatisticas = require('../lib/stats');

describe('Stat', () => {
    test('should find the biggest and smallest', () =>{
        const arr1 = [1,2,3,4,5];
        const res = gerarEstatisticas(arr1);
        expect(res.maior).toBe(5);
        expect(res.menor).toBe(1);
    });

    test('should find the biggest and smallest in a unordered array', () =>{
        const arr2 = [10,20,-4,5,5];
        const res2 = gerarEstatisticas(arr2);
        expect(res2.maior).toBe(20);
        expect(res2.menor).toBe(-4);
    });

    test('should throw exception for empty array', () =>{
        const arr1 = []

        expect(() => {
            gerarEstatisticas([])
        }).toThrow('empty array');
    });

    test('should exist just integers values', () =>{
        const arr1 = [1,2,3,4,5.2]

        expect(() => {
            gerarEstatisticas(arr1)
        }).toThrow('Not Just Integer');
    });
});