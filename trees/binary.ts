import { IsBinaryNode, IsBinaryTree } from "./interfaces";

/**
 * A basic binary node with a value, a left, and a right property
 */
class BinaryNode implements IsBinaryNode {
  public value: number;
  public left: IsBinaryNode | undefined;
  public right: IsBinaryNode | undefined;
  constructor(value: number) {
    this.setValue(value);
  }
  setValue(value: number): void {
    this.value = value;
  }
  setLeft(node: IsBinaryNode): void {
    this.left = node;
  }
  setRight(node: IsBinaryNode): void {
    this.right = node;
  }
}

class ExtendedBinaryNode extends BinaryNode {
  public parent: IsBinaryNode;
  constructor(value: number) {
    super(value);
  }
  setParent(parent: IsBinaryNode): void {
    this.parent = parent;
  }
}

/**
 * A basic unbalanced Binary Tree
 */
export class BasicBinaryTree implements IsBinaryTree {
  private root: IsBinaryNode | undefined;
  public name: string;
  constructor() {
    this.name = "BasicBinaryTree";
    this.insert = this.insert.bind(this);
    this.search = this.search.bind(this);
    this.getRoot = this.getRoot.bind(this);
  }
  /**
   * Insert a number value into the tree
   * @param value a number value to insert into the tree
   */
  insert(value: number): void {
    function _insert(value: number, node: IsBinaryNode): void {
      if (value >= node.value) {
        if (node.right) {
          _insert(value, node.right);
        } else {
          const newNode = new BinaryNode(value);
          node.setRight(newNode);
        }
      }
      if (value < node.value) {
        if (node.left) {
          _insert(value, node.left);
        } else {
          const newNode = new BinaryNode(value);
          node.setLeft(newNode);
        }
      }
    }

    if (!this.root) {
      this.root = new BinaryNode(value);
      return;
    } else {
      _insert(value, this.root);
    }
  }

  /**
   * Search the tree for the node that contains the value
   * @param value a number value to search the tree for
   */
  search(value: number): IsBinaryNode | undefined {
    function _search(
      value: number,
      node: IsBinaryNode
    ): IsBinaryNode | undefined {
      if (value === node.value) return node;
      if (value > node.value) {
        if (node.right) {
          return _search(value, node.right);
        }
      }
      if (value < node.value) {
        if (node.left) {
          return _search(value, node.left);
        }
      }
      return undefined;
    }
    return _search(value, this.root);
  }
  /**
   * Return the root node
   */
  getRoot(): IsBinaryNode {
    return this.root;
  }
}

// balanced binary tree

export class AVLBinaryTree implements IsBinaryTree {
  public name: string;
  constructor() {
    this.name = "AVLBinaryTree";
  }
}

// red/black tree

// splay tree

// AVL tree
