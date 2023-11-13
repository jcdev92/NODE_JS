const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    // defaultMeta: {service: 'useer-service'},
    transports: [
        //
        // - Write all logs with importance level of 'error' or lesss to 'error.log'
        // - Write all logs with importance level of 'info' or lesss to 'combined.log'
        //
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log'})
    ],
});

logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}))

module.exports = function buldLogger(service) {

    return {
        log: (message) => {
            logger.log('info', {message, service})
        }
    }
}