let http = require('http'); // 导入内置http模块
let fs = require('fs'); // 文件系统 读取操作
let url = require('url');

// req 客户端请求对象
// res 服务端响应对象

// let resObj = {
//     "errno": 0,
//     "msg": "success",
//     "data": [{"id":1}, {"id":2}]
// };
http.createServer(function (req, res) {
    console.log(req.url); // /getData?id=24
    let {pathname, query} = url.parse(req.url, true);
    console.log(query.id);
    // 根据请求路径做出相应处理
    if(pathname === '/') {
        let htmlStr = fs.readFileSync('./index.html');
        res.end(htmlStr);
    } else if(pathname === '/getData'){
        let resData = fs.readFileSync('./data.json');
        res.end(resData);
    } else {
        res.statusCode = 404;  // 状态码设置为404
        res.end('404 NOT FOUND');
    }

}).listen(8080, function () {
    console.log('监听8080端口');
});
