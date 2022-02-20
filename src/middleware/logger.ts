import bunyan from 'bunyan';

import fs from 'fs';

import audit from 'express-requests-logger';

const LoggerInstance = bunyan.createLogger({ name: 'Store Front Back End' });


const logger = audit({
    logger: LoggerInstance,
    request: {
        maskBody: ['password'],
        maxBodyLength: 60,
    },
    response: {
        maxBodyLength: 60,
    },
});


export { LoggerInstance, logger };