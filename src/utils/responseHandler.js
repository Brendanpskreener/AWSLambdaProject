const logger = require('./logger')

const header = {
  'Content-Type': 'application/json'
}

/**
 * returns a header, status, and body for a successful response
 *
 * @param {*} body
 * @param {number} [statusCode=200]
 * @returns
 */
function successResponse(body, statusCode = 200) {
  logger.info({
    body,
    statusCode
  }, 'Successful Response')
  return {
    Headers: header,
    Status: statusCode,
    Body: JSON.stringify(body)
  }
}

function failureResponse(error, message, statusCode) {
  logger.error({
    error,
    message,
    statusCode
  }, 'Failed Response')
  let status
  if (statusCode >= 400 && statusCode < 500 ) {
    status = statusCode
  } else {
    status = 500
  }
  return {
    Headers: header,
    Status: status,
    Body: JSON.stringify({
      message
    })
  }
}

failureResponse('garbo', 'hi you fucked up', 404)

module.exports = {
  successResponse,
  failureResponse
}
