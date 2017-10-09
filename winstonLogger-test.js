/***
 *winstonLogger日志测试
 ***/
var winstonLogger=require('./winstonLogger');

(function init()
{
    winstonLogger.info('normal info');
    winstonLogger.warn('i am warning');
    winstonLogger.error('you are error');
})();