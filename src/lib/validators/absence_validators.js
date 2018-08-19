class AbsenceValidator {
  static valid (value) {
    return !(value && value.length)
  }
}
module.exports = AbsenceValidator