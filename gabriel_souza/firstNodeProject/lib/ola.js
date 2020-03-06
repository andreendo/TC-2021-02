const NumFinder = require('./numfinder');

let numFinder = new NumFinder();
//test case 1
numFinder.find([1, 10]);
console.log(numFinder.menor, numFinder.maior);

//test case 2
numFinder = new NumFinder();
numFinder.find([50, 1, 10, 5]);
console.log(numFinder.menor, numFinder.maior);

