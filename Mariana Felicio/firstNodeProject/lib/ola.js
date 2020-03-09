const NumFinder = require('./numFinder');

let numFinder = new NumFinder();
// teste 1
numFinder.find([1, 10]);
console.log(numFinder.menor, numFinder.maior);
// teste 2
numFinder = new NumFinder();
numFinder.find([50, 1, 10, 5]);
console.log(numFinder.menor, numFinder.maior);