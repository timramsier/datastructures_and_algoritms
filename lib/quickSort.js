"use strict";
exports.__esModule = true;
function swap(array, left, right) {
    var temp = array[right];
    array[right] = array[left];
    array[left] = temp;
}
function partition(array, left, right) {
    var pivot = array[Math.floor((left + right) / 2)];
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
function quickSort(array) {
    function _quickSort(array, left, right) {
        if (left >= right)
            return;
        var index = partition(array, left, right);
        _quickSort(array, left, index - 1);
        _quickSort(array, index, right);
    }
    _quickSort(array, 0, array.length - 1);
    return array;
}
exports["default"] = quickSort;
//# sourceMappingURL=quickSort.js.map