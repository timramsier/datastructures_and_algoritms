function zipper(arrayLeft: number[], arrayRight: number[]): number[] {
  const sortedArray = [];
  while (arrayLeft.length && arrayRight.length) {
    if (arrayLeft[0] <= arrayRight[0]) {
      sortedArray.push(arrayLeft.shift());
    } else {
      sortedArray.push(arrayRight.shift());
    }
    if (!arrayLeft.length) sortedArray.push(...arrayRight);
    if (!arrayRight.length) sortedArray.push(...arrayLeft);
  }
  return sortedArray;
}

function mergeSort(array: number[]): number[] {
  if (array.length === 1) return array;
  const splitPoint = Math.ceil(array.length / 2);
  const arrayLeft = array.slice(0, splitPoint);
  const arrayRight = array.slice(splitPoint);
  return zipper(mergeSort(arrayLeft), mergeSort(arrayRight));
}

export default mergeSort;
