class PresenceValidator {
  static valid (value) {
    return value && value.length
  }
}
module.exports = PresenceValidator