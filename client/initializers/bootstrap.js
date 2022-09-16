window.onload = function (evt) {
  console.log(evt)

  var imcTableView = new ImcTableView()

  var tableController = new ImcTableController()
  tableController.registerStateListener(imcTableView)
  tableController.getTableData()

  var view = new ImcView()
  var formView = new ImcFormView()

  var calculateController = new ImcCalculateController()
  calculateController.registerStateListener(view)
  calculateController.registerStateListener(formView)

  var btn = document.querySelector("#main-action")
  btn.addEventListener("click", function () {
    calculateController.doCalculateImc()
  })
}
