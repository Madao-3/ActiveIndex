import Exception from '../exception'

class LevelDBAdpter {
  constructor (dbName, options = {}) {
    this.client = options['client'] || window.indexedDB
    if (!this.client) throw new ReferenceError('indexedDB is not supported!')
    this.version = options.version || 1
    this.dbName = dbName
    this.initDb()
  }
  
  async initDb () {
    this.db = await this.getDb()
  }

  getDb () {
    return new Promise((resolve, reject) => {
      let request = this.client.open(this.dbName, this.version)
      request.onsuccess = (e) => {
        resolve(request.result)
      }
      request.onerror = (err) => {
        reject(err)
        throw Exception.DBError(err)
      }
    })
  }
}

export default LevelDBAdpter