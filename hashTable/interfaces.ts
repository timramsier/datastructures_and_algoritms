export interface IndexedObject {
  [key: string]: string;
}

export interface IsHashTable {
  name: string;
  set(key: string, value: string): void;
  get(key: string): string;
}
