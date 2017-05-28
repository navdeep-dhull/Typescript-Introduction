module Geometry {
  

class Point {  
  x: number;
   constructor(x: number, public y: number = 0) {
    this.x = x;
  }  
  dist() { return Math.sqrt(this.x * this.x + this.y * this.y); }  
  static origin = new Point(0, 0);
}

var p1 = new Point(10, 20);
var p2 = new Point(25); 
console.log("Distance of point is - "+p1.dist());


class Point3D extends Point {
  constructor(x: number, y: number, public z: number = 0) {
    super(x, y); 
  }

  // Overwrite
  dist() {
    var d = super.dist();
    return Math.sqrt(d * d + this.z * this.z);
  }
}

}