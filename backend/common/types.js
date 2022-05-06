export const RobotRole = {
  SERVICE: 1,
  DEVELOP: 2,
}

export const RobotMode = {
  AUTO: 1,
  MANUAL: 7,
}
export const RobotModeToString = {
  [RobotMode.AUTO]: 'auto',
  [RobotMode.MANUAL]: 'manual',
}

export const RobotType = {
  NR_MOBILE: 'NR-MOBILE',
  NR_MANIPULATOR: 'NR-MANIPULATOR',
  R_MOBILE: 'R-MOBILE',
  R_MANIPULATOR: 'R-MANIPULATOR',
}

export const RobotParamType = {
  LOCATION: 1,
  NUMBER: 2,
  STRING: 3,
  BOOLEAN: 4,
}

export const OrderStatus = {
  WAITING: 0,
  PROGRESSING: 1,
  PAUSED: 2,
  DONE: 3,
  COMPLETE: 3,
  CANCELED: 4,
}

export const OrderType = {
  DELIVERY: 1,
  RETURN: 2,
  TAKEOVER: 3,
}

export const SyntaxType = {
  JOB: 'job',
  SERVICE: 'service',
}
