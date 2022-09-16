class Person {
  constructor(theHeight, theWeight) {
    this._height = theHeight
    this._weight = theWeight
  }

  get height() {
    return this._height
  }

  set height(theHeight) {
    this._height = theHeight
  }

  get weight() {
    return this._weight
  }

  set weight(theWeight) {
    this._weight = theWeight
  }

  asJson() {
    return {
      height: this._height,
      weight: this._weight,
    }
  }
}

class ImcPerson extends Person {
  constructor(height, weight, imc, imcDescription) {
    super(height, weight)
    this.imc = imc
    this.imcDescription = imcDescription
  }
}

class ImcTable {
  constructor(level1, level2, level3, level4) {
    this.level1 = level1
    this.level2 = level2
    this.level3 = level3
    this.level4 = level4
  }
}
