export interface IsBinaryNode {
  value: number;
  left: IsBinaryNode | undefined;
  right: IsBinaryNode | undefined;
  setValue(value: number): void;
  setLeft(node: IsBinaryNode): void;
  setRight(node: IsBinaryNode): void;
}

export interface IsBinaryTree {
  name: string;
  search(value: number): IsBinaryNode | number | undefined;
  insert(value: number): void;
  getRoot(): IsBinaryNode | number[];
}

export interface IsHeap {
  name: string;
  insert(value: number): void;
  getRoot(): number | undefined;
}
