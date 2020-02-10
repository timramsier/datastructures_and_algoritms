const { expect } = require("chai");
const getArrayHasSumOf = require("../lib/problems/getArrayHasSumOf").default;

const testInput = (array, sum, result) => {
  it(`Should return the correct result with input of ${array} looking for sum of ${sum}`, () => {
    expect(getArrayHasSumOf(array, sum)).to.equal(result);
  });
};

describe("Check if array contains sum", () => {
  testInput([1, 2, 3], 3, true);
  testInput([1, 2, 3], 4, true);
  testInput([1, 2, 3], 8, false);
  testInput([3, 4, 2, 5], 9, true);
  testInput([3, 4, 2, 5], 29, false);
});
