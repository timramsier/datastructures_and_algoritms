import { cursorTo } from "readline";

/**
 * PROBLEM:
 * Given an array of words and a width maxWidth, format the text such that each line
 * has exactly maxWidth characters and is fully (left and right) justified.
 *
 * You should pack your words in a greedy approach; that is, pack as many words as
 * you can in each line. Pad extra spaces ' ' when necessary so that each line has
 * exactly maxWidth characters.
 *
 * Extra spaces between words should be distributed as evenly as possible. If the
 * number of spaces on a line do not divide evenly between words, the empty slots
 * on the left will be assigned more spaces than the slots on the right.
 *
 * For the last line of text, it should be left justified and no extra space
 * is inserted between words.
 *
 * Note:
 *
 *  - A word is defined as a character sequence consisting of non-space characters only.
 *  - Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
 *  - The input array words contains at least one word.
 */

function getWordLengthSums(words: string[]): number[] {
  return words.reduce(
    (acc: number[], word: string, index: number): number[] => {
      const prev = acc[index - 1] || 0;
      acc.push(prev + word.length);
      return acc;
    },
    []
  );
}

function getMaxIndex(wordSums: number[], maxWidth: number): number {
  const _findIndexWithMinWhiteSpace = (length, index) =>
    length + index - 1 < maxWidth;
  const maxIndex = wordSums.filter(_findIndexWithMinWhiteSpace).length;
  return maxIndex || wordSums.length;
}

function getFormattedLine(words: string[], space: number): string {
  let spaceLeft = space;
  const _buildString = (str: string, word: string, index: number) => {
    const fillSpace = Math.ceil(spaceLeft / (words.length - index - 1 || 1)); // minus 1 to not calculate last word (min of 1)
    const minWidth = word.length + fillSpace;
    spaceLeft -= fillSpace;
    str += word.padEnd(minWidth);
    return str;
  };
  return words.reduce(_buildString, "");
}

function justifyText(words: string[], maxWidth: number): string[] {
  const result = [];
  // iterate through words to grab selection of words that fit as long as words are left
  while (words.length) {
    // create prefix sum array of word lengths
    const wordSums = getWordLengthSums(words);
    const maxIndex = getMaxIndex(wordSums, maxWidth);
    const totalNeededWhiteSpace = maxWidth - wordSums[maxIndex - 1];
    const lineWords = words.slice(0, maxIndex);

    // remove words that I am making a sentence from
    words = words.slice(maxIndex);
    // format words with necessary whitespace
    const line = words.length
      ? getFormattedLine(lineWords, totalNeededWhiteSpace)
      : lineWords.join(" ").padEnd(maxWidth);

    result.push(line);
  }
  return result;
}

export default justifyText;
