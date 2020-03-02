/**
 * 模块化(一般用于服务器端Node.js)
 * 1.引入模板
 * require(模块路径)
 *      - 自定义模块(用户自己写的模块add.js sum.js)
 *        模块路径一定要加上./或者../开头
 *      - 第三方模块(别人写的模块,可以通过npm下载)
 *        模块路径直接写模块名称
 * 2.暴露模板
 * exports.xxx = xxx;
 * module.exports = xxx;
 * 模块暴露的本质:
 *      向外暴露是的module.exports的值和exports无关
 *      exports是module.exports的一个引用
 * 所有模块都 有一个入口js(主文件)
 * 作用:负责将其他js模块引入,汇总在一起
 *      这样只要使用主模块,其他的模块都能一起加载
 * 模块内部的数据对外都是私有的,需要暴露出去,才能使用
 *
 */
let add = require('./add');
let sum = require('./sum');
let path = require('path');
let $ = require('jquery');
console.log(add);
console.log(sum);
console.log(path);
console.log($);
