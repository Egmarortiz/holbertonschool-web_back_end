export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // getters
  get brand() { return this._brand; }
  get motor() { return this._motor; }
  get color() { return this._color; }

  // Species hook
  static get [Symbol.species]() {
    return this;
  }

  // Return a new object of the class
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species(this._brand, this._motor, this._color);
  }
}

