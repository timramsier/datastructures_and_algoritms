/**
 * Swaps two values within an array
 * @param array array of number values
 * @param left index of first value
 * @param right index of second value
 */
function swap(array: number[], left: number, right: number) {
  const temp = array[right];
  array[right] = array[left];
  array[left] = temp;
}

/**
 * Creates pivot and swaps all values less than the pivot to the left, all values greater than the
 * pivot to the right, and returns the left index as a new pivot once complete.
 * @param array array of number values
 * @param left index of left wall of the sort
 * @param right index of right wall of the sort
 */
function partition(array: number[], left: number, right: number): number {
  const pivot = array[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (array[left] < pivot) {
      left += 1;
    }
    while (array[right] > pivot) {
      right -= 1;
    }
    if (left <= right) {
      swap(array, left, right);
      left += 1;
      right -= 1;
    }
  }
  return left;
}

/**
 * Sorts an array in average of O(n log n) time (worst case is O(n^2))
 * @param array an array of numbers
 */
function quickSort(array: number[]): number[] {
  function _quickSort(array: number[], left: number, right: number): number[] {
    if (left >= right) return;
    const index = partition(array, left, right);
    _quickSort(array, left, index - 1);
    _quickSort(array, index, right);
  }
  _quickSort(array, 0, array.length - 1);
  return array;
}

export default quickSort;
