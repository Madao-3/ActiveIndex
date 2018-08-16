import PresenceValidator from './validators/presence_validators'

class ActiveIndexValidator {
  constructor () {
  }

  valid () {
    for (let validate_hash of this._validators()) {
      let keys = Object.keys(validate_hash)
      for (let key of keys) {
        this._validate_dispatch(key)
      }
    }
  }

  _validate_dispatch () {
    // if
  }

  validators () {
    return {}
  }
}
export default ActiveIndexValidator