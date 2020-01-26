"use strict";
exports.__esModule = true;
function zipper(arrayLeft, arrayRight) {
    var sortedArray = [];
    while (arrayLeft.length && arrayRight.length) {
        if (arrayLeft[0] <= arrayRight[0]) {
            sortedArray.push(arrayLeft.shift());
        }
        else {
            sortedArray.push(arrayRight.shift());
        }
        if (!arrayLeft.length)
            sortedArray.push.apply(sortedArray, arrayRight);
        if (!arrayRight.length)
            sortedArray.push.apply(sortedArray, arrayLeft);
    }
    return sortedArray;
}
function mergeSort(array) {
    if (array.length === 1)
        return array;
    var splitPoint = Math.ceil(array.length / 2);
    var arrayLeft = array.slice(0, splitPoint);
    var arrayRight = array.slice(splitPoint);
    return zipper(mergeSort(arrayLeft), mergeSort(arrayRight));
}
exports["default"] = mergeSort;
//# sourceMappingURL=mergeSort.js.map