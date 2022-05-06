import { makeErrDef as E } from './common'

/**
 * @mixin
 */
const authError = {
  AUTH_KEY_DUPLICATED: E(412, 74000, 'Key is duplicated'),
  AUTH_REMOVE_ROOT_NOT_ALLOWED: E(403, 74002, 'Root group can not be removed'),
  AUTH_NOT_FOUND: E(412, 74001, 'Auth key does not exist'),
  AUTH_USER_ALREADY_IN_GROUP: E(412, 74003, 'User is already in the group'),
  AUTH_INVALID_ADD_TO_TERMINAL: E(412, 74004, 'Cannot add a group to terminal auth'),
  AUTH_NODE_HAS_CHILD: E(412, 74005, 'Node has child'),
  AUTH_INVALID_TYPE: E(412, 74006, 'Type is not valid. Only "ADMIN" can have a special type and, each special node can only have children of the identical type'),
  AUTH_NO_PERMISSION: E(403, 74100, 'Has no permission for this work'),
  AUTH_NOT_MASTER: E(403, 74101, 'Not owner of this group'),
  AUTH_NOT_WRITER: E(403, 74102, 'Has no permission to write'),
}

export default authError
