let obj = require('./a.js'); // 自定义模块  只有自定义模块需要加路径
let fs = require('fs'); // 内置模块
let mime = require('mime'); // 第三方模块

console.log(module);

// console.log(mime);

// console.log(obj);
// console.log(obj.add(10, 20));


// console.log(__dirname);
// console.log(__filename);
// function (require, exports, module, __filename, __dirname) {
//     console.log(add.a());
//     console.log(this);
// }