const { expect } = require("chai");
const getPermutations = require("../lib/algorithms/getPermutations").default;

const testSet = (array, results) => {
  it(`should return the correct values given ${array} as input`, () => {
    expect(getPermutations(array)).to.eql(results);
  });
};

describe("Heaps Permutation", () => {
  testSet([1], [[1]]);
  testSet(
    [1, 2],
    [
      [1, 2],
      [2, 1]
    ]
  );
  testSet(
    [1, 2, 3],
    [
      [1, 2, 3],
      [2, 1, 3],
      [3, 1, 2],
      [1, 3, 2],
      [2, 3, 1],
      [3, 2, 1]
    ]
  );
});
