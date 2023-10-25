// Square

const _size = new WeakMap();
export class Square {
  constructor(size) {
    _size.set(this, size);
  }
  draw() {
    console.log("Square with size: " + _size.get(this));
  }
}

export default Square;
