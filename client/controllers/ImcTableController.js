class ImcTableController extends Controller {
  constructor() {
    super()
    this.service = new ImcTableService()
  }

  loadTable(rawObj) {
    const entries = []
    Object.keys(rawObj)
      .sort()
      .forEach(key => {
        entries.push({ index: key, text: rawObj[key] })
      })

    this.notifyStateChange({
      entries: entries,
    })
  }

  getTableData() {
    this.service.getImcTable(this.loadTable.bind(this))
  }
}
