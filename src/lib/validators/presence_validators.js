class PresenceValidator {
  valid (model, name) {
    return model[name] && model[name].length
  }
}
module.exports = PresenceValidator