const { expect } = require("chai");
const Boggle = require("../lib/problems/Boggle").default;

const boardOne = [
  ["G", "I", "Z"],
  ["U", "E", "K"],
  ["Q", "S", "E"]
];

const dictionaryOne = ["GEEKS", "FOR", "QUIZ", "GO"];

const boardTwo = [
  ["M", "S", "E", "F"],
  ["R", "A", "T", "D"],
  ["L", "O", "N", "E"],
  ["K", "A", "F", "B"]
];

const dictionaryTwo = ["START", "NOTE", "SAND", "STONED"];

describe("Boggle Game Test", () => {
  const boggleOne = new Boggle(boardOne);

  const testDictionary = (boggle, words, output) => {
    it(`should return ${output} for "${words}"`, () => {
      expect(boggle.getValidWordsFromDictionary(words)).to.be.eql(output);
    });
  };

  testDictionary(boggleOne, dictionaryOne, ["GEEKS", "QUIZ"]);

  const boggleTwo = new Boggle(boardTwo);

  testDictionary(boggleTwo, dictionaryTwo, ["NOTE", "SAND", "STONED"]);
});
