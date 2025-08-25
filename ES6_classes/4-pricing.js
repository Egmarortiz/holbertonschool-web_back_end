import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;     // validate via setter
    this.currency = currency; // validate via setter
  }

  // amount
  get amount() {
    return this._amount;
  }
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // currency
  get currency() {
    return this._currency;
  }
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  // "100" + "Dollar (USD)" => "100 Dollar (USD)"
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
