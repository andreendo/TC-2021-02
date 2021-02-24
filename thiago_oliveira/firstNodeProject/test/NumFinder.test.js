const NumFinder = require('../lib/NumFinder.js')

const numFinder = new NumFinder();

describe('NumFinder test', () => {

	test('Test a small array', () => {
		numFinder.find([1,10])
		expect(numFinder.smallest).toBe(1)
		expect(numFinder.biggest).toBe(10)
	})

	test('Test an unordered array', () => {
		numFinder.find([1,10, -20, 670])
		expect(numFinder.smallest).toBe(-20)
		expect(numFinder.biggest).toBe(670)
	})

	test('test empty array', ()=> {
		expect(() => {
			numFinder.find([])
		}).toThrow('empty array')
	})

	test('test array with objects and numbers', ()=> {
		expect(() => {
			numFinder.find([1, 2, 3, 4, { name: 'Thiago' } ])
		}).toThrow('invalid array')
	})
})

