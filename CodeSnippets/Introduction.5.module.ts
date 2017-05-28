// Modules
// Modules, "." can be used as separator for sub modules
module Geometry {
  export class Square {
    constructor(public sideLength: number = 0) {
    }
    area() {
      return Math.pow(this.sideLength, 2);
    }
  }  
var s = new Geometry.Square(5);

// Nested module
module Mathamatics{
 export module Geometry {
  export class Square {
    constructor(public sideLength: number = 0) {
    }
    area() {
      return Math.pow(this.sideLength, 2);
    }
  }  
}

module Trignmetry{

  }
}

var s1 = new Mathamatics.Geometry.Square(5);

/// <reference path="Geometry.ts" />
// Local alias for referencing a module
import G = Geometry;

var s2 = new G.Square(10);

