class NumFinder {
    constructor() {
        this.menor = Number.POSITIVE_INFINITY;
        this.maior = Number.NEGATIVE_INFINITY;
    }

    find(arr) {
        for (let num of arr) {
            if (num < this.menor)
                this.menor = num;
            else if (num > this.maior)
                this.maior = num;
        }

    }
}


module.exports = NumFinder;