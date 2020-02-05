import { BasicBinaryTree, AVLBinaryTree } from "./binary";
import { IsBinaryTree } from "./interfaces";
const treeify = require("treeify");

function testSearchTree(binaryTree: IsBinaryTree): void {
  const testArray = [5, 8, 7, 1, 12, -4, 8, 10, 29, 13];
  testArray.forEach(binaryTree.insert);

  console.log(`${binaryTree.name}:`);
  console.log(`
Test Array: ${testArray}

Tree:

${treeify.asTree(binaryTree.getRoot(), true)}
`);
}

(function() {
  testSearchTree(new BasicBinaryTree());
  testSearchTree(new AVLBinaryTree());
})();
