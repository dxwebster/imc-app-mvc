class ImcCalculatorService {
  constructor() {
    this._hostname = "http://localhost:8080"
    this._path = "/imc/calculate"
    this._xhr = new HttpUtil()
  }

  calculateImc(person, callback) {
    this._xhr
      .post(this._hostname, this._path, person)
      .then(function (response) {
        response.json().then(function (rawObj) {
          var imcPerson = new ImcPerson(rawObj["height"], rawObj["weight"], rawObj["imc"], rawObj["imcDescription"])
          callback(imcPerson)
        })
      })
      .catch(function (err) {
        console.error("sth went wrong...")
        console.err(err)
      })
  }
}

class ImcTableService {
  constructor() {
    this._hostname = "http://localhost:8080"
    this._path = "/imc/table"
    this._xhr = new HttpUtil()
  }

  getImcTable(callback) {
    this._xhr
      .get(this._hostname, this._path)
      .then(function (response) {
        response.json().then(callback)
      })
      .catch(function (err) {
        console.error("erro no get table...")
        console.err(err)
      })
  }
}
