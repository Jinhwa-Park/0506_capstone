import { makeErrDef as E } from './common'

/**
 * @mixin
 */
const hotelError = {
  HOTEL_NO_AVAILABLE_ROBOT: E(412, 90000, 'No available robot'),
  HOTEL_INVALID_STATE: E(412, 90001, 'Invalid service state'),
  HOTEL_SERVICE_NOT_FOUND: E(412, 90002, 'Service not found'),
  HOTEL_NOT_AVAILABLE_REGION: E(412, 90004, 'Region is not valid'),
  HOTEL_NO_WORKPLACE_DEFINED: E(412, 90005, 'No workplace defined'),
  HOTEL_NO_ROBOT_MODEL_DEFINED: E(412, 90006, 'No robot model defined'),
  HOTEL_MASTER_KEY_DUPLICATED: E(412, 90007, 'Key already exists.'),
}

export default hotelError
