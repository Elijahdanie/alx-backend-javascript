export default class Building {
  constructor(sqft) {
    if(new.target)
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
