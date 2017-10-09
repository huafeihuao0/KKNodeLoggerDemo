/***
 *多通道日志
 ***/
var winston=require('winston');

/***
 *普通日志
 *
 * @param txt {String} 日志文本
 ***/
function info(txt)
{
    winston.info(txt, {timestamp: Date.now(), pid: process.pid});
}

/***
 *警告日志
 *
 * @param txt {String} 日志文本
 ***/
function warn(txt)
{
    winston.warn(txt, {timestamp: Date.now(), pid: process.pid});
}

/***
 *错误日志
 *
 * @param txt {String} 日志文本
 ***/
function error(txt)
{
    winston.error(txt, {timestamp: Date.now(), pid: process.pid});
}

module.exports=//
    {
        info:info,//普通日志
        warn:warn,//警告日志
        error:error,//错误日志
    }

