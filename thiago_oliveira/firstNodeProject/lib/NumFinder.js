class NumFinder {
	constructor () {
		//
	}

	validate(arr) {
		if (!arr.length) throw Error('empty array')

		for (let el of arr)
			if (typeof el !== 'number') throw 'invalid array'
	}

	find(arr) {
		this.biggest = arr[0]
		this.smallest = arr[0]

		this.validate(arr)

		for (let n of arr) {
			if (n < this.smallest)
				this.smallest = n
			else if (n > this.biggest)
				this.biggest = n
		}
	}
}

module.exports = NumFinder;
