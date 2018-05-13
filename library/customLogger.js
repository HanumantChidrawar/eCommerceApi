const logger = require('pino')()
const moment = require('moment');

let captureError = (errorMessage, errorOrigin, errorLevel) => {
    let currentTime = moment();

    let errorResponse = {
        timeStamp: currentTime,
        errorMessage: errorMessage,
        errorOrigin: errorOrigin,
        errorLevel: errorLevel
    };

    logger.error(errorResponse);
    return errorResponse;
}

let captureInfo = (message, origin, level) => {
    let currentTime = moment();

    let responseMessage = {
        timeStamp: currentTime,
        message: message,
        origin: origin,
        level: level
    };

    logger.info(responseMessage);
    return responseMessage;
}

module.exports = {
    error: captureError,
    info: captureInfo    
};