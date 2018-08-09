import Model from 'lib/model'
class ActiveLevel {
  const DBMethods = [
      'clear',
      'find',
      'create',
      'find_or_create',
      'update',
      'destroy',
      'where'
  ]

  constructor (options) {
    this.dbName = options.name
    this.config = options.config
  }

}


ActiveLevel.Model = Model
module.exports = ActiveLevel