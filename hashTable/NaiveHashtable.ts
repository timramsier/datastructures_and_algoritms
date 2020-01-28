import { IsHashTable } from "./interfaces";
import { timingSafeEqual } from "crypto";

/**
 * A Simple hashtable class made using two arrays.
 */
class NaiveHashtable implements IsHashTable {
  private keys: string[];
  private values: string[];
  public name: string;
  constructor() {
    this.name = "NaiveHashtable";
    this.keys = [];
    this.values = [];
  }
  set(key: string, value: string): void {
    this.keys.push(key);
    this.values.push(value);
  }
  get(key: string): string {
    return this.values[this.keys.indexOf(key)];
  }
}

export default NaiveHashtable;
