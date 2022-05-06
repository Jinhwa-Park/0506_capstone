import { makeErrDef as E } from './common'

/**
 * @mixin
 */
const serviceError = {
  SERVICE_INVALID_SYNTAX: E(412, 80000, 'Invalid Syntax'),
  SERVICE_NOT_ASSIGNABLE: E(412, 80001, 'Cannot write to variable'),
  SERVICE_LOCAL_NOT_DEFINED: E(412, 80002, 'Local variable not defined'),
  SERVICE_INVALID_REF_CATEGORY: E(412, 80003, 'Invalid reference category'),
  SERVICE_VARIABLE_NOT_DEFINED: E(412, 80004, 'Variable not defined in path'),
  SERVICE_UNDEFINED_REFERENCE: E(412, 80005, 'Some reference is not defined'),
  SERVICE_OPERATION_FAIL: E(412, 80006, 'Fail to perform operation'),
  SERVICE_DESTINATION_NOT_DEFINED: E(412, 80007, 'Destination is not defined'),
  SERVICE_ORDER_ITEM_NOT_DEFINED: E(412, 80008, 'Order Items is not defined'),
  SERVICE_DUPLICATE_ID: E(412, 80100, 'Task id is duplicated'),
  SERVICE_NOT_FOUND: E(404, 80101, 'Service not found'),
  SERVICE_JOB_NOT_FOUND: E(404, 80102, 'job not found'),
  SERVICE_ROBOT_IN_SERVICE: E(412, 80200, 'Robot is in service'),
  SERVICE_REQUIRE_PARAMETER: E(412, 80201, 'Some of parameters ar missing'),
  SERVICE_REQUIRE_DEPENDENCY: E(412, 80202, 'Some task, service depends on, could not be found'),
  SERVICE_INVALID_STATUS: E(412, 80203, 'Current action is not allowed'),
  SERVICE_IN_SERVE: E(412, 80204, 'Service is served'),
  SERVICE_DISABLED: E(412, 80205, 'Service is disabled'),
}

export default serviceError
