import 'exceptions/no_method_error'

class ActiveLevelCollection {
  constructor(list) {
    this.list = list
    let collectionProxy = new Proxy(this, this.proxyHandler);
    return collectionProxy
  }

  proxyHandler () {
    return {
      get: (target, name) => {
        if (target.hasOwnProperty(name)) return this[name]
        return this.methodMissing(name)
      }
    }
  }

  methodMissing (name) {
    throw new ReferenceError()
  }
}

module.exports = ActiveLevelCollection