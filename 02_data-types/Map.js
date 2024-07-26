/**
 * A Map is a collection of key-value pairs, similar to an object.
 * //todo: why we need map as we have object?
 * A Map is similar to object, keys in objects are only strings and symbols. But we can use any value as key in Map.
 * 
 * Methods in Maps:
 *  1. get() - returned the value associated with the key.
 *  2. set() - set the value of the key and returns the map
 *  3. delete() - delete the entry which has the key same as passed key.
 *  4. clear() - delete all key-value pairs from the map.
 *  5. has() - returns true if the map has the key provided.
 *  6. keys() - returns the new iterator that contains the keys insertion order.
 */

// creating a map
const map = new Map();
map.set('BD', "Bangladesh");
map.set('USA', 'United States of America');
map.set('FR', 'France');
map.set('IN', 'India');
console.log(map);
/* Map(4) {
    'BD' => 'Bangladesh',
    'USA' => 'United States of America',
    'FR' => 'France',
    'IN' => 'India'
  }
    */