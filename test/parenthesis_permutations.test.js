const { expect } = require("chai");
const getParenthesis = require("../lib/algorithms/getParenthesis").default;

const testSet = (num, results) => {
  it(`should return the correct values given ${num} as input`, () => {
    expect(getParenthesis(num).sort()).to.eql(results.sort());
  });
};

describe("Heaps Permutation", () => {
  testSet(1, ["()"]);
  testSet(2, ["(())", "()()"]);
  testSet(3, ["((()))", "(()())", "(())()", "()(())", "()()()"]);
});
