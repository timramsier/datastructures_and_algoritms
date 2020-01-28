import { IsHeap } from "./interfaces";

export class MinHeap implements IsHeap {
  public storage: number[];
  public name: string;
  constructor() {
    this.name = "MinHeap";
    this.storage = [];
    this.insert = this.insert.bind(this);
    this.search = this.search.bind(this);
  }

  search(value: number): number | undefined {
    function _search(value: number, nodeIndex: number): number | undefined {
      if (value === this.storage[nodeIndex]) return nodeIndex;

      if (value < this.storage[nodeIndex]) {
        return _search(value, this.getLeftIndex(nodeIndex));
      }

      return _search(value, this.getRightIndex(nodeIndex));
    }
    return _search(value, 0);
  }

  insert(value: number): void {
    const _swap = (firstIndex: number, secondIndex: number): void => {
      const temp = this.storage[firstIndex];
      this.storage[firstIndex] = this.storage[secondIndex];
      this.storage[secondIndex] = temp;
    };

    const _reorder = (index: number): void => {
      const parentIndex = this.getParentIndex(index);
      if (
        !this.storage[parentIndex] ||
        this.storage[index] >= this.storage[parentIndex]
      )
        return;

      _swap(index, parentIndex);

      _reorder(parentIndex);
      _reorder(index);
    };

    this.storage.push(value);

    _reorder(this.storage.length - 1);
  }

  getRoot(): number | undefined {
    return this.storage[0];
  }

  getLeftIndex(index: number): number {
    return 2 * index + 1;
  }

  getRightIndex(index: number): number {
    return 2 * index + 2;
  }

  getParentIndex(index: number): number {
    return (index - 1 - ((index + 1) % 2)) / 2;
  }
}
