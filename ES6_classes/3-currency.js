// 3-currency.js
export default class Currency {
  constructor(code, name) {
    // route through setters to enforce validation
    this.code = code;
    this.name = name;
  }

  // code
  get code() {
    return this._code;
  }
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // name
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // "USD" + "Dollar" -> "Dollar (USD)"
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

