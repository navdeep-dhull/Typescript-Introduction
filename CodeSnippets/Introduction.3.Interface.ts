
// Interfaces are structural, anything that has the properties is compliant with the interface
interface Person {
  name: string;
  // Optional properties, marked with a "?"
  age?: number;
  // And of course functions
  move(): void;
}

// Object that implements the "Person" interface Can be treated as a Person since it has the name and move properties
var p: Person = { name: "Bobby", move: () => {  } };

// Objects that have the optional property:
var validPerson: Person = { name: "Bobby", age: 42, move: () => { } };

// Is not a person because age is not a number
var invalidPerson: Person = { name: "Bobby", age: true };

// Interfaces can also describe a function type
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// Only the parameters' types are important, names are not important.
var mySearch: SearchFunc;
mySearch = function (src: string, sub: string) {
  return src.search(sub) != -1;
}
