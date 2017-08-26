let http = require('http');
let fs = require('fs');

let port = 8000;

http.createServer((req, res) => {
    console.log('response');
    //  处理首页请求
    if(req.url === '/' || req.url === '/index.html'){
        let htmlStr = fs.readFileSync('./user.html');
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end(htmlStr);
        // 处理数据请求
    } else if(req.url === '/vote'){
        let resData = fs.readFileSync('./user.json');
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        res.end(resData);
        // 处理图标请求
    } else if(req.url === '/favicon.ico'){
        let resImg = fs.readFileSync('./logo.png');
        res.setHeader('Content-Type', 'image/png;charset=utf-8');
        res.end(resImg);
    } else if(req.url === '/index.css'){
        let resCss = fs.readFileSync('./index.css');
        res.setHeader('Content-Type', 'text/css;charset=utf-8');
        res.end(resCss);
    }
}).listen(port, () => console.log(`监听${port}端口`));