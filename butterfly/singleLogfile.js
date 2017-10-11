/**
* 单文件日志
**/
var express = require('express');
var fs = require('fs');
var morganLogger = require('morgan');
var app = express();

(function init()
{
    /*使用morgan中间件*/
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
* 使用morgan中间件
**/
function useMorganMid()
{
    // 创建日志文件写入流
    var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
    app.use(morganLogger('combined', {stream: accessLogStream}));
}

