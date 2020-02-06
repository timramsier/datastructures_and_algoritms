const isEven = (num: number) => num % 2 === 0;

function swap(array: number[], indexA: number, indexB: number): void {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}

function getPermutations(array: number[]): number[][] {
  const permutations: number[][] = [];
  function _heapsPerm(n: number, array: number[]): void {
    // base case there is nothing left to permute so array is finished
    // add it to result set
    if (n === 1) {
      permutations.push(array.slice()); // use slice() to prevent mutating the array in result set
      return;
    }
    // loop through each remaining value of the array and add
    // another branch to the call tree
    for (let i = 0; i < n; i += 1) {
      _heapsPerm(n - 1, array);

      if (isEven(n)) {
        swap(array, i, n - 1);
      } else {
        swap(array, 0, n - 1);
      }
    }
  }

  _heapsPerm(array.length, array);
  return permutations;
}

export default getPermutations;
