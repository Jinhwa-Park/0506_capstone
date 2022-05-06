import ERR from '../errors'

// eslint-disable-next-line no-unused-vars
export default () => (err, req, res, next) => {
  function sendWithDef(def) {
    const { originalUrl, method } = req
    const { code, message, status, data } = def
    let stack
    if (process.env.ERROR_TRACING) {
      stack = err.stack
      console.error(stack)
    }
    res.status(status).json({ code, message, stack, data })
    res.locals.error = { status, code }
  }

  if (err.name === 'JsonWebTokenError') {
    sendWithDef(ERR.INVALID_TOKEN)
  } else if (err.name === 'TokenExpiredError') {
    sendWithDef(ERR.EXPIRED_TOKEN)
  } else if (err.name === 'AppError') {
    sendWithDef(err)
  } else {
    sendWithDef(ERR.UNKNOWN)
    res.locals.error = { status: 500, code: -1 }
    //console.error(err)
  }
}
