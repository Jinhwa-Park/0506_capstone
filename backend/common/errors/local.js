import { makeErrDef as E } from './common'

/**
 * @mixin
 */
const localError = {
  LOCAL_CODE_DUPLICATE: E(412, 71000, 'Country code duplicate'),
  LOCAL_NAME_DUPLICATE: E(412, 71001, 'The local name is already exists'),
  LOCAL_NOT_FOUND: E(404, 71002, 'Local definition not found'),
  LOCAL_INVALID_PARENT: E(412, 71003, 'Invalid parent node type'),
}

export default localError
