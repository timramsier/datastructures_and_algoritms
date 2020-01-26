"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var mergeSort_1 = require("./mergeSort");
var quickSort_1 = require("./quickSort");
function testSort(fn) {
    var testArray = __spreadArrays(new Array(10)).map(function () {
        return Math.round(Math.random() * 1000);
    });
    var correctlySorted = testArray.slice().sort(function (a, b) { return a - b; });
    var sortedArray = fn(testArray);
    console.log("\n    " + fn.name + ":\n\n    Original Array:   " + testArray + "\n    Sorted Array:     " + sortedArray + "\n\n    Sorted Correctly: " + (JSON.stringify(correctlySorted) ===
        JSON.stringify(sortedArray)) + "\n  ");
}
(function () {
    testSort(mergeSort_1["default"]);
    testSort(quickSort_1["default"]);
})();
//# sourceMappingURL=sorts.js.map