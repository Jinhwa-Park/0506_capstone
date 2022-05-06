import ERR from '../errors'


export default () => (req, res) => {
  if (res._headerSent) {
    return
  }
  res.locals.error = { ...ERR.UNREACHABLE }
  console.log(`Cannot reachable to ${req.originalUrl}`)
  res.status(404).send({ code: ERR.UNREACHABLE.code, message: ERR.UNREACHABLE.message })
}
