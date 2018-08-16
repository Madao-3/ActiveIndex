class PresenceValidator {
  static valid (value) {
    console.log(`PresenceValidator: ${value}`)
    return value && value.length
  }
}
module.exports = PresenceValidator