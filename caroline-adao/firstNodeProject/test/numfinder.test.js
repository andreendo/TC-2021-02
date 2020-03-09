const NumFinder = require( "../lib/numfinder" );

describe( 'NumFinder', () => {
  test('with ordered array', () => {
    let numFinder = new NumFinder();
    numFinder.find([1,10]);
    expect( numFinder.smaller ).toBe( 1 );
    expect( numFinder.bigger ).toBe( 10 );
  });

  test('with deordered array', () => {
    let numFinder = new NumFinder();
    numFinder.find([50,1,5,10]);
    expect( numFinder.smaller ).toBe( 1 );
    expect( numFinder.bigger ).toBe( 50 );
  });
})
const numFinder = new NumFinder();
