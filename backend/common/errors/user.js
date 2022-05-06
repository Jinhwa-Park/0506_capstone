import { makeErrDef as E } from './common'

/**
 * @mixin
 */
const userError = {
  USER_NOT_FOUND: E(404, 70000, 'UserId is not exists'),
  DUPLICATED_USERID: E(412, 70001, 'UserId is duplicated'),
  INVALID_EMAIL: E(412, 70002, 'Email is not valid from'),
  INVALID_PASSWORD: E(412, 70003, 'Invalid password format'),
  WRONG_PASSWORD: E(401, 70004, 'Wrong password'),
  USER_NOT_ACTIVATED: E(403, 70005, 'User not activated'),
  USER_ORG_REQUIRED: E(403, 70006, 'Not defined organization info'),
  USER_SIGN_UP_NOT_FOUND: E(404, 70007, 'User sign up request not exists'),
  USER_SIGN_UP_RESOLVED_ALREADY: E(404, 70008, 'Sign up request is resolved already'),
  USER_ACCOUNT_MISMATCH: E(401, 70009, 'Account information does not match.'),
  USER_ACCOUNT_LOCKED: E(403, 70010, 'Number of retries has been exceeded. Account is locked for a while.'),
  USER_ROLE_REQUIRED: E(403, 70011, 'User\'s Role is required'),
  USER_CREATE_ERROR: E(412, 70012, 'An error occurred while creating a new user'),
}

export default userError
