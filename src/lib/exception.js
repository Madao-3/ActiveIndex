"use strict"
import NoMethodError from './exceptions/no_method_error'
import ArgumentsError from './exceptions/arguments_error'
import UndefinedError from './exceptions/undefined_error'

let ActiveException = {
  NoMethodError,
  ArgumentsError,
  UndefinedError
}

export default ActiveException
