import Currency from './3-currency';

export default class Pricing {
  constructor(currency, amount) {
    this.currency = currency;
    this.amount = amount;
  }

  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    } else {
      this._currency = value;
    }
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    } else {
      this._amount = value;
    }
  }

  displayFullamount() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
