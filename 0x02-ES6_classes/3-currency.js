export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a string');
    } else {
      this._code = value;
    }
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    } else {
      this._name = value;
    }
  }

  displayFullCurrency() {
    return `${this.code} (${this.name})`;
  }
}
