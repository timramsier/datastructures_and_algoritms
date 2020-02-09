const { expect } = require("chai");
const StairCase = require("../lib/problems/recursiveStaircase").default;

const testStaircase = (stairCase, result) => {
  it(`should return the correct result`, () => {
    expect(stairCase.getPossibilities()).to.equal(result);
  });
};

describe("Staircase", () => {
  const stairCaseOne = new StairCase(2, [1, 2]);
  const stairCaseTwo = new StairCase(4, [1, 2]);
  const stairCaseThree = new StairCase(4, [1, 3, 5]);
  testStaircase(stairCaseOne, 2);
  testStaircase(stairCaseTwo, 5);
  testStaircase(stairCaseThree, 3);
});
