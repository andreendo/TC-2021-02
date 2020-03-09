const NumFinder = require('./numfinder');

let numFinder = new NumFinder();


//test: case 1
numFinder.find([1, 10]);
console.log(numFinder.menor, numFinder.maior);


//test2: case 2
numFinder = new NumFinder();
numFinder.find([1, 50, 5, 10]);
console.log(numFinder.menor, numFinder.maior);