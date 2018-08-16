import Model from './model'
import Query from './query'
import Exception from './exception'
import DBAdapter from './adapter'
import ActiveIndexValidator from './validator'

let DEFAULT_DB_NAME = 'defaultDB'
let DEFAULT_DB

class ActiveIndexBase extends ActiveIndexValidator {
  constructor (attrs) {
    super(attrs)
    if (!ActiveIndexBase.dbName) throw new Exception.UndefinedError('please define ActiveIndexBase.dbName')
    Object.assign(this, {model: new Model(attrs, ActiveIndexBase.adapter)});
    this.defineModelProperty(attrs)
    return this
  }

  defineModelProperty (attrs) {
    for (let columnName of Object.keys(attrs)) {
      Object.defineProperty(this, columnName, {
        get : function(){
          return this.model[columnName];
        },
        set : function(newValue){
          if (this.model[columnName] !== newValue) this.model._changed = true
          this.model[columnName] = newValue
        },
        enumerable : false,
        configurable : true
      });
    }
  }

  proxyHandler () {
    return {
      get: (target, name) => {
        if (target.hasOwnProperty(name)) return this[name]
        if (this.model[name]) return this.model[name]
        return this.methodMissing(name)
      }
    }
  }

  currentAdapter () {
    if (!this._adapter) this._adapter = new DBAdapter(ActiveIndexBase.adapter, ActiveIndexBase.dbName);
    return this._adapter
  }

  db (name) {
    return this.currentAdapter().db
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