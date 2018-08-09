import Model from './model'
import Query from './query'

var DEFAULT_DB_NAME = 'defaultDB';
var DEFAULT_DB;

class ActiveLevelBase {
  constructor (options) {
    if (!options) return null
    this.dbName = options.name
    this.config = options.config
  }
}

ActiveLevelBase.find = function (id){
  return (new Query({id}))[0]
}

ActiveLevelBase.where = function (queryParams){
  return (new Query(queryParams))
}

export default ActiveLevelBase