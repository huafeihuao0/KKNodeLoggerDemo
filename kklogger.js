/***
 *日志管理器
 ***/
const fs = require('fs');
const path = require('path');
const winston = require('winston');
const moment = require('moment');
const stackTrace = require('stack-trace');
const _ = require('lodash');
const RotateFile = require('winston-daily-rotate-file');
const env = process.env.NODE_ENV;
const logDir = path.resolve('.', 'log');
var logger;
const dateFormat = function ()
{
    return moment().format('YYYY-MM-DD HH:mm:ss:SSS');
}
logger = new (winston.Logger)({
    transports: [
        new winston.transports.Console({
            timestamp: dateFormat,
            colorize: true
        })
    ]
});

logger.dbLogger = new (winston.Logger)({
    transports: [
        new winston.transports.Console({
            timestamp: dateFormat,
            colorize: true
        })
    ]
});

if (env === 'product')
{
    //处理物理文件日志
}

module.exports = logger;