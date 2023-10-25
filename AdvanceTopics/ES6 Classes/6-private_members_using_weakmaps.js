// Private Members Using WeakMaps

const _radius = new WeakMap();
const _move = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log("move", this); // set the currect object Circle
    });
    /*
    _move.set(this, function () {
      console.log("move", this); // set to window/global object
    });
    */
  }
  draw() {
    _move.get(this)();
    console.log(_radius.get(this));
    console.log("draw");
  }
}

const c = new Circle(1);
