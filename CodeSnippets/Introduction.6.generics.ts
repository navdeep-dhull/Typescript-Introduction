// Generics
// Classes
class Tuple<T1, T2> {
  constructor(public item1: T1, public item2: T2) {
  }
}

// Interfaces
interface Pair<T> {
  item1: T;
  item2: T;
}

// And functions
var pairToTuple = function <T>(p: Pair<T>) {
  return new Tuple(p.item1, p.item2);
};

var tuple = pairToTuple({ item1: "hello", item2: "world" });
