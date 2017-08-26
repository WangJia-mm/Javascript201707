## NODE
1.JS 脚本语言 可以运行浏览器客户端 浏览器客户端相当于一个解析器（运行环境）
浏览器端JS 主要是操作DOM BOM，也可以使用浏览器内置对象和方法（document） 
浏览器客户端 全局对象 window

2.NODE 也是一个JS运行环境 让js独立运行在服务端
NODE 环境中 主要是 操作磁盘文件和搭建HTTP服务器 也提供了一些内置对象和方法
（fs, http）等
NODE 事件机制 IO模型 模块化 CommonJS规范(require, exports)  AMD CMD  Buffer
NODE 全局对象 global

### NODE 目的
1.用js语言实现高性能web服务器   
NODE 采用Google v8引擎

### webstorm 中配置node
```
File -> settings -> Languages && frameworks -> NODE and npm => enable 
```

### 如何让js运行在node环境中
1.在webstorm 中 当前文件 右键 run a.js
2.在当前js文件所在目录下打开命令窗口 输入 node a.js 

### NODE 模块
1.模块：一个js文件就是第一个模块
  内置模块 fs http   第三方模块 npm社区下载下来（别人写的） 自定义模块 自己写的
  
2.包：多个子模块组成的集合

### NODE 局部变量

1.模块化CommonJS规范
require 导入模块
exports/module.exports 导出模块
let module = {
    exports: {}
};
let exports = module.exports;
默认导出 module.exports这个对象  exports这个变量只是和module.exports 指向的时同一个空间对象

exports 只能一个一个导出
 exports.say = 1;
 exports.add = 2;
不能批量导出
exports = {
   id: 24
};

module.exports 可以批量导出
module.exports = {
    id: 12
};


__filename 当前文件所在绝对路径
__dirname 当前文件所在目录的绝对路径
function (require, exports, module, __filename, __dirname) {

}
### 模块导出导入
let obj = require('./a.js'); // 自定义模块  
< 只有自定义模块需要加路径
let fs = require('fs'); // 内置模块
let mime = require('mime'); // 第三方模块

查找机制：
 [ 'H:\\WEB2017Js\\Javascript201707\\第九周\\Day4\\node_study\\node_modules',
     'H:\\WEB2017Js\\Javascript201707\\第九周\\Day4\\node_modules',
     'H:\\WEB2017Js\\Javascript201707\\第九周\\node_modules',
     'H:\\WEB2017Js\\Javascript201707\\node_modules',
     'H:\\WEB2017Js\\node_modules',
     'H:\\node_modules' ] }






