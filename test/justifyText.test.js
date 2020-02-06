const { expect } = require("chai");
const justifyText = require("../lib/algorithms/justifyText").default;

const testSet = (words, maxWidth, results) => {
  it(`should return the correct values given ${words} as input`, () => {
    expect(justifyText(words, maxWidth)).to.eql(results);
  });
};

describe("Justify Text", () => {
  testSet(["one."], 10, ["one.      "]);
  testSet(["This", "is", "a", "test", "sentence."], 16, [
    "This  is  a test",
    "sentence.       "
  ]);
  testSet(
    [
      "Science",
      "is",
      "what",
      "we",
      "understand",
      "well",
      "enough",
      "to",
      "explain",
      "to",
      "a",
      "computer.",
      "Art",
      "is",
      "everything",
      "else",
      "we",
      "do",
      "after"
    ],
    20,
    [
      "Science  is  what we",
      "understand      well",
      "enough to explain to",
      "a  computer.  Art is",
      "everything  else  we",
      "do after            "
    ]
  );
});
