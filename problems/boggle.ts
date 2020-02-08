type IsBoggleBoard = string[][];

interface IsBoggleNode {
  children: IsBoggleNode[];
  value: string | null;
}

interface IsStore {
  [key: string]: IsBoggleNode;
}

class BoggleNode implements IsBoggleNode {
  public value: string | null;
  public children: IsBoggleNode[];
  constructor(value: string | null, children: IsBoggleNode[]) {
    this.value = value;
    this.children = children;
  }
}

class Boggle {
  private head: IsBoggleNode;
  private store: IsStore;
  constructor(board: IsBoggleBoard) {
    this.setBoard(board);
    this.buildStore = this.buildStore.bind(this);
  }
  setBoard(board: IsBoggleBoard): void {
    this.buildStore(board);
    this.connectNodes();
    this.head = new BoggleNode(null, Object.values(this.store));
  }
  private buildStore(board: IsBoggleBoard) {
    this.store = {};
    for (let y = 0; y < board.length; y += 1) {
      for (let x = 0; x < board[y].length; x += 1) {
        const node = new BoggleNode(board[y][x], []);
        this.store[`${y}-${x}`] = node;
      }
    }
  }
  private connectNodes(): void {
    for (let [key, value] of Object.entries(this.store)) {
      let [strY, strX] = key.split("-");
      const y = Number(strY);
      const x = Number(strX);
      const above = `${y - 1}-${x}`;
      const aboveRight = `${y - 1}-${x + 1}`;
      const right = `${y}-${x + 1}`;
      const belowRight = `${y + 1}-${x + 1}`;
      const below = `${y + 1}-${x}`;
      const belowLeft = `${y + 1}-${x - 1}`;
      const left = `${y}-${x - 1}`;
      const aboveLeft = `${y - 1}-${x - 1}`;
      this.store[key].children = [
        above,
        aboveRight,
        right,
        belowRight,
        below,
        belowLeft,
        left,
        aboveLeft
      ]
        .map(coord => this.store[coord])
        .filter(Boolean);
    }
  }
  public hasWord(word: string): boolean {
    const _traverse = (word: string, node: IsBoggleNode): boolean => {
      const char = word[0];

      if (word.length) {
        const remaining = word.slice(1);
        const children = node.children.filter(
          child =>
            child.value.toLowerCase() === char.toLowerCase() && child !== node
        );
        if (!children.length) return false;
        return children
          .map(child => _traverse(remaining, child))
          .reduce((a, c) => (a ? a : c), false);
      }
      return true;
    };
    return _traverse(word, this.head);
  }
  public getValidWordsFromDictionary(words: string[]): string[] {
    return words.filter(word => this.hasWord(word));
  }
}

export default Boggle;
