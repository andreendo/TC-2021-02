class NumFinder {
    constructor() {
        //
    }

    validate(arr) {
        this.checkLen(arr);
        this.checkArrayOfNumbers(arr);
    }

    checkLen(arr) {
        if (arr.length === 0) {
            throw 'empty array';
        }
    }

    checkArrayOfNumbers(arr) {
        for (let el of arr) {
            if (typeof el !== 'number')
                throw 'invalid array';
        }
    }

    find(arr) {

        this.validate(arr);
        this.biggest = arr[0];
        this.smallest = arr[0];



        for (let num of arr) {
            if (num < this.smallest) {
                this.smallest = num;
            }

            if (num > this.biggest) {
                this.biggest = num;
            }
        }


    }
}


module.exports = NumFinder;