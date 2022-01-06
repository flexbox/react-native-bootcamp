"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static zero() {
        return new Point(0, 0);
    }
    static outscreen() {
        return new Point(-999, -999);
    }
    equals(other) {
        if (!other) {
            return false;
        }
        return this.x === other.x && this.y === other.y;
    }
}
exports.Point = Point;
class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    static zero() {
        return new Size(0, 0);
    }
    equals(other) {
        if (!other) {
            return false;
        }
        return this.width === other.width && this.height === other.height;
    }
}
exports.Size = Size;
class Frame {
    constructor(x, y, width, height) {
        this.origin = new Point(x, y);
        this.size = new Size(width, height);
    }
    static zero() {
        return new Frame(0, 0, 0, 0);
    }
    static window() {
        const window = react_native_1.Dimensions.get('window');
        return new Frame(0, 0, window.width, window.height);
    }
    static outscreen() {
        const point = Point.outscreen();
        return new Frame(point.x, point.y, 0, 0);
    }
    equals(other) {
        if (!other) {
            return false;
        }
        return this.origin.equals(other.origin) && this.size.equals(other.size);
    }
    /**
     * Creates new frame aligned to left of other
     */
    leftOf(other) {
        return new Frame(other.origin.x - this.size.width, this.origin.y, this.size.width, this.size.height);
    }
    /**
     * Creates new frame aligned to top of other
     */
    topOf(other) {
        return new Frame(this.origin.x, other.origin.y - this.size.height, this.size.width, this.size.height);
    }
    /**
     * Creates new frame aligned to right of other
     */
    rightOf(other) {
        return new Frame(other.origin.x + other.size.width, this.origin.y, this.size.width, this.size.height);
    }
    /**
     * Creates new frame aligned to bottom of other
     */
    bottomOf(other) {
        return new Frame(this.origin.x, other.origin.y + other.size.height, this.size.width, this.size.height);
    }
    /**
     * Creates new frame centered horizontally to other
     */
    centerHorizontalOf(other) {
        return new Frame(other.origin.x + (other.size.width - this.size.width) / 2, this.origin.y, this.size.width, this.size.height);
    }
    /**
     * Creates new frame centered vertically to other
     */
    centerVerticalOf(other) {
        return new Frame(this.origin.x, other.origin.y + (other.size.height - this.size.height) / 2, this.size.width, this.size.height);
    }
    centerOf(other) {
        return new Frame(other.origin.x + (other.size.width - this.size.width) / 2, other.origin.y + (other.size.height - this.size.height) / 2, this.size.width, this.size.height);
    }
}
exports.Frame = Frame;
//# sourceMappingURL=type.js.map