module.exports = {
  info: (object, message) => log('info', object, message),
  warn: (object, message) => log('warn', object, message),
  error: (object, message) => log('error', object, message)
}

function log(logType, object, message) {
  const now = new Date().getTime()
  console[logType](`${now}:${JSON.stringify(object)}:${message}`)
}
