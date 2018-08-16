import PresenceValidator from './validators/presence_validators'
import ActiveIndexModel from './model'

class ActiveIndexValidator {
  constructor () {
  }

  valid () {
    let validators = this.validators()
    for (let columnName of Object.keys(validators)) {
      let validatorHash = validators[columnName]
      let keys = Object.keys(validatorHash)
      for (let key of keys) {
        if (!this._validate_dispatch(key, columnName)) return false
      }
    }
    return true
  }

  _validate_dispatch (key, columnName) {
    switch (key) {
      case 'presence':
        return PresenceValidator.valid(this[columnName])
      case 'absence':
        return !PresenceValidator.valid(this[columnName])
      case 'numberic':
        return false
      default:
        return true 
    }
  }

  validators () {
    return {}
  }
}
export default ActiveIndexValidator