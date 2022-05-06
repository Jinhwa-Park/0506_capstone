import common from './common'
import user from './user'
import local from './local'
import AppError from './appError'
import authGroup from './authGroup'
import robot from './robot'
import service from './service'
import hotel from './hotel'
import order from './order'

const errorFinal = { ...common, ...user, ...authGroup, ...local, ...robot, ...service, ...hotel, ...order }

export default errorFinal
export { AppError }
