import Model from './model'
import Query from './query'
import Exception from './exception'
import DBAdapter from './exception'
import ActiveIndexValidator from './validator'

let DEFAULT_DB_NAME = 'defaultDB'
let DEFAULT_DB

class ActiveIndexBase extends ActiveIndexValidator {
  constructor (attrs) {
    this = super()
    if (!ActiveIndexBase.dbName) {
      throw new Exception.UndefinedError('please define ActiveIndexBase.dbName')
    }
    Object.assign(this, {model: new Model(attrs)});
    let proxy = new Proxy(this, this.proxyHandler())
    return proxy
  }

  proxyHandler () {
    return {
      get: (target, name) => {
        debugger
        console.log(window.a = this.model)
        if (this.model[name]) return this.model[name]
        if (target.hasOwnProperty(name)) return this[name]
        return this.methodMissing(name)
      }
    }
  }

  db (name) {
    if(!this._db) this._db = new DBAdapter(ActiveIndexBase.adapter);
    return this._db
  }

  methodMissing (name) {
    throw new Exception.NoMethodError(`Method Missing ${name}`)
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