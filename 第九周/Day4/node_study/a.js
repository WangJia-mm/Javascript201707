let fs = require('fs');
let url = require('url');
let str = 'http://127.0.0.1:8080/getData?id=24';
let obj = url.parse(str, true);
console.log(obj);

// 同步读取
// let htmlStr = fs.readFileSync('./index.html', 'utf8');
// console.log(htmlStr); // 默认读取出来 Buffer

// 异步读取  回调函数 第一参数通常是err 错误信息对象 第二个参数通常是 内容结果
// fs.readFile('./index.html', 'utf8', function (err, data) {
//     if(err){
//         console.log('读取失败');
//     }else {
//         console.log(data);
//     }
// });
//
// console.log(123);


// console.log(123);
// console.log(this === module.exports);
// console.log(window);

// let say = 'Hello world!';
// let add = (a, b) => a+b;
// let fn = (a, b) => a+b;
// let a = 'ni hao';
// exports.say = say;
// exports.add = add;
//
//
// module.exports.fn = fn;
// module.exports.a = a;

// let module = {
//     exports: {}
// };
// let exports = module.exports;
// 默认导出 module.exports这个对象  exports这个变量只是和module.exports 指向的时同一个空间对象

// exports 只能一个一个导出
exports = {
   id: 24
};

// module.exports 可以批量导出
module.exports = {
    id: 12
};


