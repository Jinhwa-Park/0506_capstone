import { makeErrDef as E } from './common'

/**
 * @mixin
 */
const orderError = {
  ORDER_NOT_FOUND: E(404, 73000, 'Cannot find order.'),
  ORDER_INVALID_STATE: E(412, 73001, 'Invalid order state'),
}

export default orderError
