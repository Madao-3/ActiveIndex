"use strict"
import Exception from './exception'

class ActiveIndexModel {
  constructor(attributes) {
    this.attributes = attributes
    let modelProxy = new Proxy(this, this.proxyHandler())
    return modelProxy
  }

  proxyHandler () {
    return {
      get: (target, name) => {
        if (this.attributes[name]) return this.attributes[name]
        if (target.hasOwnProperty(name)) return this[name]
        return this.methodMissing(name)
      }
    }
  }

  methodMissing (name) {
    throw new Exception.NoMethodError(`No method ${name}`)
  }
}

export default ActiveIndexModel