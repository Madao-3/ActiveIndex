import Model from './model'
import Query from './query'
import Exception from './exception'
import DBAdapter from './exception'

let DEFAULT_DB_NAME = 'defaultDB'
let DEFAULT_DB

class ActiveIndexBase {
  constructor (attrs) {
    if (!ActiveIndexBase.dbName) {
      throw new Exception.UndefinedError('please define ActiveIndexBase.dbName')
    }
    this.model = new Model(attrs)
    let proxy = new Proxy(this, this.proxyHandler())
    return proxy
  }

  proxyHandler () {
    return {
      get: (target, name) => {
        if (this.model[name]) return this.model[name]
        if (target.hasOwnProperty(name)) return this[name]
        return this.methodMissing(name)
      }
    }
  }

  _db (name) {
    if(!this.db) this._db = new DBAdapter(ActiveIndexBase.adapter);
    return this.db
  }

  save () {
    
  }

  methodMissing (name) {
    throw new Exception.NoMethodError(`No method ${name}`)
  }
}

ActiveIndexBase.dbName = null
ActiveIndexBase.adapter = 'leveldb'
// 'mysql' ... emm  maybe?

ActiveIndexBase.find = function (id){
  return (new Query({id}))[0]
}

ActiveIndexBase.where = function (queryParams){
  return (new Query(queryParams))
}

export default ActiveIndexBase