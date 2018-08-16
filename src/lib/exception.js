"use strict"
import NoMethodError from './exceptions/no_method_error'
import ArgumentsError from './exceptions/arguments_error'
import UndefinedError from './exceptions/undefined_error'
import DBError from './exceptions/db_error'

let ActiveException = {
  NoMethodError,
  ArgumentsError,
  UndefinedError,
  DBError
}

export default ActiveException
