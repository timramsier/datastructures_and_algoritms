import { IndexedObject, IsHashTable } from "./interfaces";
import NaiveHashtable from "./NaiveHashtable";

function testHashtable(hashTable: IsHashTable) {
  const testObject: IndexedObject = {
    dog: "canine",
    cat: "feline",
    car: "automobile",
    apple: "fruit"
  };

  console.log(`${hashTable.name}`);

  Object.keys(testObject).forEach(function(key: string): void {
    hashTable.set(key, testObject[key]);
  });

  Object.keys(testObject).forEach(function(key: string): void {
    console.log(
      `Key of '${key}' contains value of '${hashTable.get(
        key
      )}' => ${hashTable.get(key) === testObject[key]}`
    );
  });
}

(function() {
  testHashtable(new NaiveHashtable());
})();
