1、webpack在执行的时候，可以通过 npx webpack --env.production 的方式传递是开发模式还是生产模式，（接收是在webpack.config.js中）开发模式的时候，打包的js文件是放在内存中的，所以重启后文件就不存在了。）然后根据模式来用做不同的配置;
2、webpack-dev-serve 热更新；
3、插件html-webpack-plugin来打包html文件；
4、npm link可以为相关的bin创建快捷方式。

Webpack打包模块的源码执行程序：
1、把所有模块的代码放入到函数中，用一个数组保存起来；
2、根据require时传入的数组索引，能知道需要哪一段代码；
3、从数组中，根据索引取出包含我们代码的函数；
4、执行该函数，传入一个对象module.exports;
5、把我们的代码，按照约定，正好是用module.exports=‘XXX’赋值；
6、调动函数结束后，module.exports从原来的空对象，就有值了；
7、最终return module.exports 作为require函数的返回值。
