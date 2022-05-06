import { makeErrDef as E } from './common'

// base 72xxx
/**
 * @mixin
 */
const robotError = {
  ROBOT_NOT_FOUND: E(404, 72000, 'Cannot find robot.'),
  ROBOT_SERIAL_DUPLICATED: E(412, 72001, 'Serial already exists.'),
  ROBOT_MAC_DUPLICATED: E(412, 72002, 'MAC address already exists.'),
  ROBOT_INVALID_SERIAL_OR_MAC: E(412, 72003, 'Serial or MAC is not valid'),
  ROBOT_DANGLING: E(412, 72004, 'Robot has no location'),
  ROBOT_CREATE_ERROR: E(412, 72005, 'There is an error in creating the robot'),
  ROBOT_SERVICE_CREATE_ERROR: E(412, 72006, 'There is an error in creating the robot service'),
  ROBOT_MODEL_NOT_FOUND: E(404, 72010, 'Cannot find robot model.'),
  ROBOT_MAP_INVALID_SYNTAX: E(412, 72100, 'Map file invalid syntax.'),
  ROBOT_MAP_ROOT_NOT_FOUND: E(412, 72101, 'Map root not found.'),
  ROBOT_MAP_NEED_MORE_FILE: E(412, 72102, 'Some files of map are missing.'),
  ROBOT_MAP_INSERT_ERROR: E(412, 72103, 'Map creation error.'),
  ROBOT_MAP_DELETE_ERROR: E(412, 72104, 'Map delete error.'),
  ROBOT_MAP_UPDATE_ERROR: E(412, 72105, 'Map update error.'),
  ROBOT_MAP_NOT_FOUND: E(412, 72103, 'Cannot find map'),
  ROBOT_MAP_DUPLICATED_VERSION: E(412, 72104, 'Map version duplicated'),
  ROBOT_MAP_INVALID_REGION: E(412, 72105, 'Map region is not valid'),
  ROBOT_MAP_DUPLICATED_REGION: E(412, 72106, 'Map region duplicated'),
  ROBOT_UNDER_SERVICE: E(412, 72200, 'Robot is serving'),
  ROBOT_OFFLINE: E(412, 72201, 'Robot is offline'),
  ROBOT_NEED_MAP: E(412, 72202, 'Map is not configured to robot'),
  ROBOT_INVALID_MAP: E(412, 72203, 'The map cannot assign to robot'),
  ROBOT_ONLINE: E(412, 72204, 'Robot is online'),
  ROBOT_INVALID_MODE: E(412, 72205, 'Action is not allowed for current mode'),
  ROBOT_NOT_FINISHED_COMMAND: E(412, 72206, 'Robot is still running for previous command'),
  ROBOT_ALREADY_APPLY: E(412, 72207, 'It is already being applied to robots.'),
}

export default robotError
