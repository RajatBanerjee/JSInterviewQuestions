/**Hashing is a common technique for storing data in such a way that the data can be inserted and retrieved very quickly. 
 * Hashing uses a data structure called a hash table. 
 * A hashtable has key value pair
 * A Hash Table (Hash Map) is a data structure used to implement an associative array, a structure that can map keys to values.
 *  A Hash Table uses a *****HASH FUNCTION**** to compute an index into an array of buckets or slots,
 *  from which the desired value can be found
 * Although hash tables provide fast insertion, deletion, and retrieval,
 *  they perform poorly for operations that involve searching. */
function HashTable(size) {
    this.values = {};
    this.numberOfValues = 0;
    this.size = size;
  }
  
  HashTable.prototype.add = function(key, value) {
    var hash = this.calculateHash(key);
     if(!this.values.hasOwnProperty(hash)) {
       this.values[hash] = {};
     }
    this.values[hash][key] = value;
  };
  
  HashTable.prototype.calculateHash = function(key) {
    return key.toString().length % this.size;
  };

  HashTable.prototype.length = function() {
    return this.numberOfValues;
  };
  HashTable.prototype.print = function() {
    var string = '';
    for(var value in this.values) {
      for(var key in this.values[value]) {
        string += this.values[value][key] + ' ';
      }
    }
    console.log(string.trim());
  };
  
  HashTable.prototype.printTable = function() {
    console.log(this.values);
  };
  
  var hashTable = new HashTable(3);
  hashTable.add('first', 1);
  hashTable.add('second', 2);
  hashTable.add('third', 3);
  hashTable.add('fourth', 4);
  hashTable.add('fifth', 5);
  hashTable.print(); // => 2 4 1 3 5
  hashTable.printTable();

  /**output 
   * {
   *  '0': { second: 2, fourth: 4 },
   *  '2': { first: 1, third: 3, fifth: 5 } 
   * }
  */