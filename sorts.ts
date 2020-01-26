import mergeSort from "./mergeSort";
import quickSort from "./quickSort";

function testSort(fn: Function): void {
  // random test array
  const testArray = [...new Array(10)].map(() =>
    Math.round(Math.random() * 1000)
  );

  // built-in sort to test against
  const correctlySorted = testArray.slice().sort((a, b) => a - b);

  // function passed in to test
  const sortedArray = fn(testArray);

  // console output
  console.log(`
    ${fn.name}:

    Original Array:   ${testArray}
    Sorted Array:     ${sortedArray}

    Sorted Correctly: ${JSON.stringify(correctlySorted) ===
      JSON.stringify(sortedArray)}
  `);
}

// Invoke the sort functions
(function() {
  testSort(mergeSort);
  testSort(quickSort);
})();
