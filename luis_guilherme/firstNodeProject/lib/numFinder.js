module.exports = class NumFinder {
    find(arr) {
        if (!arr.length) throw "empty array";

        arr.forEach(e => {
            if (typeof e !== "number")
                throw "invalid array";
        });

        this.smallest = arr[0];
        this.biggest = arr[0];

        arr.forEach(e => {
            if (e < this.smallest) this.smallest = e;
            if (e > this.biggest) this.biggest = e;
        });
    }
}