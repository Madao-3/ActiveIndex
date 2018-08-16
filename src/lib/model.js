"use strict"
import Exception from './exception'

class ActiveIndexModel {
  constructor(attributes) {
    this.attributes = attributes
    this._changed = false
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

  save () {
    
  }

  update () {
    
  }

  destroy () {
    
  }

  methodMissing (name) {
    throw new ReferenceError('method missing ' + name, arguments)
  }
}

export default ActiveIndexModel