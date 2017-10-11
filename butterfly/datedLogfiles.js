/**
* 日期关联的多日志文件
**/

var FileStreamRotator = require('file-stream-rotator');
var express = require('express');
var fs = require('fs');
var morganLogger = require('morgan');
var app = express();
var logDirectory;

(function init()
{
    /*创建日志目录*/
    makeLogDir();
    /*使用morgan日志中间件*/
    useMorganMid();
    app.get('/', function (req, res)
    {
        res.send('hello, world!');
    });

    app.listen(8808,function ()
    {
        console.log("----启动成功---->");
    })
})();

/**
* 创建日志目录
**/
function makeLogDir()
{
    logDirectory = __dirname + '/log';
    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
}

/**
* 创建轮询输出流
**/
function createRotatedLogStream()
{
    var opts=//
        {
            date_format: 'YYYYMMDD',
            filename: logDirectory + '/%DATE%.log',
            frequency: 'daily',
            verbose: false
        }
   var accessLogStream = FileStreamRotator.getStream(opts);
    return accessLogStream;
}

/**
* 使用morgan日志中间件
**/
function useMorganMid()
{
    var accessLogStream=createRotatedLogStream() ;//轮询日志流
    app.use(morganLogger('combined', {stream: accessLogStream}));
}