export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') throw new TypeError('size must be a number');
    if (typeof location !== 'string') throw new TypeError('location must be a string');

    this._size = size;
    this._location = location;
  }

  get size() { return this._size; }
  set size(v) {
    if (typeof v !== 'number') throw new TypeError('size must be a number');
    this._size = v;
  }

  get location() { return this._location; }
  set location(v) {
    if (typeof v !== 'string') throw new TypeError('location must be a string');
    this._location = v;
  }

  // Controls how the object converts to primitives
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this._size;
    if (hint === 'string') return this._location;
    return this._size;
  }
}

