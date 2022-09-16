class ImcCalculateController extends Controller {
  constructor() {
    super()
    this.heightElem = document.querySelector("#altura")
    this.weightElem = document.querySelector("#peso")
    this.service = new ImcCalculatorService()
  }

  doCalculateImc() {
    console.log("docalc...")
    var height = this.heightElem.value
    var weight = this.weightElem.value
    var person = new Person(height, weight)

    this.service.calculateImc(person.asJson(), imcObj => {
      this.notifyStateChange({
        person: imcObj,
      })
    })
  }
}
