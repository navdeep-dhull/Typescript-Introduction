
// Classes
// Classes Memeber - members are public by default
class Point {
  // Properties
  x: number;

  // Constructor - the public/private keywords in this context will generate 
  // the boiler plate code for the property and the initialization in the constructor.

  // In this example, "y" will be defined just like "x" is, but with less code
  // Default values are also supported

  constructor(x: number, public y: number = 0) {
    this.x = x;
  }

  // Functions
  dist() { return Math.sqrt(this.x * this.x + this.y * this.y); 
  

}

  // Static members
  static origin = new Point(0, 0);
}

var p1 = new Point(10, 20);
var p2 = new Point(25); //y will be 0


// Inheritance
class Point3D extends Point {
  constructor(x: number, y: number, public z: number = 0) {
    super(x, y); // Explicit call to the super class constructor is mandatory
  }

  // Overwrite
  dist() {
    var d = super.dist();
    return Math.sqrt(d * d + this.z * this.z);
  }
}
