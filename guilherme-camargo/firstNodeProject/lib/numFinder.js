class NumFinder {

	constructor() {

	}

	validate(arr) {
		this.checkLen(arr);
		this.checkArrayOfNumber(arr);		
	}

	checkLen(arr){
		if (arr.length === 0)
			throw 'empty array'
	}

	checkArrayOfNumber(arr){
		for (let el of arr)
			if (typeof el !== 'number')
				throw 'invalid array'
	}

	find(arr) {
		this.validate(arr)

		this.biggest = arr[0];
		this.smallest = arr[0];

		for (let num of arr) {
			if (this.biggest < num)
				this.biggest = num;

			if (this.smallest > num)
				this.smallest = num;
		}
	}

}

module.exports = NumFinder;