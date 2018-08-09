class ActiveLevelModel {
  constructor(attributes) {
    this.attributes = attributes
    let db_proxy = new Proxy(this, this.proxyHandler);
    return db_proxy
  }

  proxyHandler () {
    return {
      get: (target, name) => {
        if (DBMethods.includes(name)) return this[name]()
        if (target.hasOwnProperty(name)) return this[name]
        return this.methodMissing(name)
      }
    }
  }

  methodMissing (name) {
    attribute
  }
}

module.exports = ActiveLevelModel