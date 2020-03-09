class NumFinder {
  constructor() {
    this.smaller = Number.POSITIVE_INFINITY;
    this.bigger = Number.NEGATIVE_INFINITY;
  }

  find( arr ) {
    for ( let num of arr ) {
      if( num < this.smaller ) {
        this.smaller = num;
      } else if ( num > this.smaller ) {
        this.bigger = num;
      }
    }
  }
}

module.exports = NumFinder;