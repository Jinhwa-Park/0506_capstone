import { isFunction } from 'lodash'

export default class AppError extends Error {
  constructor(errDef, ...args) {
    const { message, status, code } = errDef
    if (isFunction(message)) {
      super(message(...args))
    } else {
      super(message)
    }
    Error.captureStackTrace(this, AppError)
    this.status = status
    this.data = [...args]
    this.code = code
    this.name = 'AppError'
  }
}
