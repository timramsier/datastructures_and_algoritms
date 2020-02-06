function getParenthesis(num: number): string[] {
  const answer: string[] = [];
  // Base case: If there is nothing else to match against, return nothing
  if (num === 0) {
    answer.push("");
  } else {
    // loop through the number of desired parenthesis pairs
    for (let i = 0; i < num; i += 1) {
      // for each left parenthesis pair
      for (const left of getParenthesis(i)) {
        // try to generate a right parenthesis pair
        for (const right of getParenthesis(num - i - 1)) {
          answer.push(`(${left})${right}`);
        }
      }
    }
  }
  return answer;
}

export default getParenthesis;
