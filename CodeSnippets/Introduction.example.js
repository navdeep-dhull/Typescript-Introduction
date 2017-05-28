var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Geometry;
(function (Geometry) {
    var Point = (function () {
        function Point(x, y) {
            if (y === void 0) { y = 0; }
            this.y = y;
            this.x = x;
        }
        Point.prototype.dist = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
        return Point;
    }());
    Point.origin = new Point(0, 0);
    var p1 = new Point(10, 20);
    var p2 = new Point(25);
    console.log("Distance of point is - " + p1.dist());
    var Point3D = (function (_super) {
        __extends(Point3D, _super);
        function Point3D(x, y, z) {
            if (z === void 0) { z = 0; }
            var _this = _super.call(this, x, y) || this;
            _this.z = z;
            return _this;
        }
        // Overwrite
        Point3D.prototype.dist = function () {
            var d = _super.prototype.dist.call(this);
            return Math.sqrt(d * d + this.z * this.z);
        };
        return Point3D;
    }(Point));
})(Geometry || (Geometry = {}));
