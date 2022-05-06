/**
 * @param status
 * @param code
 * @param {String | function}message
 * @returns {{code: number, message: string | function, status: number}}
 */
export function makeErrDef(status, code, message) {
  return Object.freeze({ status, code, message })
}

/**
 * @mixin
 */
const commonError = {
  INVALID_ARGUMENT: makeErrDef(
    412,
    60000,
    (name) => (name ? `Invalid argument - ${name}` : 'Invalid argument'),
  ),
  INVALID_PREFIX: makeErrDef(
    412,
    60001,
    (message) => message,
  ),
  DB_BROKEN: makeErrDef(500, 60001, 'Un expected database state'),
  UNREACHABLE: makeErrDef(404, 404, 'Not reachable'),
  UNKNOWN: makeErrDef(404, 60002, 'Unknown. Ask to admin.'),
  NOT_IMPLEMENTED: makeErrDef(501, 60003, 'Not implemented feature'),
  INVALID_TOKEN: makeErrDef(401, 60200, 'Token is not valid'),
  EXPIRED_TOKEN: makeErrDef(401, 60201, 'Token is expired'),
  TOKEN_REQUIRED: makeErrDef(401, 60202, 'Token required'),
  TOKEN_FORMAT: makeErrDef(412, 60204, 'Token format is invalid'),
  TOKEN_INVALIDATED: makeErrDef(412, 60205, 'Token is invalidated. Should renew token'),
  NOT_AUTHORIZED: makeErrDef(403, 60203, 'Not authorized. Need higher privilege level.'),
  FAIL_TRANSACTION: makeErrDef(500, 60300, 'Fail to transact'),
  LONG_POLL_TIMEOUT: makeErrDef(408, 61000, 'Long poll timeout'),
}
export default commonError
