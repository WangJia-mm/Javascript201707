let http = require('http'); // 导入内置http模块
let fs = require('fs'); // 文件系统 读取操作

// req 客户端请求对象
// res 服务端响应对象
http.createServer(function (req, res) {
    let htmlStr = fs.readFileSync('./index.html');
    res.end(htmlStr);  // 结束响应 响应内容 string /buffer
}).listen(8080, function () {
    console.log('监听8080端口');
});
