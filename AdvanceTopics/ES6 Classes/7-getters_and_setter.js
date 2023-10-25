// Getters and Setters

const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  // ES 6
  // getting radius as property.
  get radius() {
    return _radius.get(this);
  }
  set radius(value) {
    if (value <= 0) throw new Error("Invalid radius");
    _radius.set(this, value);
  }
}

const c = new Circle(1);
