0. 读取webpakc.config.js
1. 解析文件依赖
2. 替换require 为__webpack_require__
3. 本地使用{}存储所有的文件，然后通过使用为__webpack_require__获取文件内容，知行函数
<!-- 
@ todo
加上loader
加上plugin机制 -->


<!-- 配置文件交kkb.config.sj -->

1. webpack具体做了那几件事吗
   1. 文件依赖解析
   2. 文件内容替换
      1. loader文件转换
      2. require('xx.css)
      3. require('xx.less)
      4. require('xx.png')
   3. tapable 
   4. compile有很多的钩子 每个钩子可以做些额外的事情，就是plugin
2. 代码再捋一遍
3. 自动化测试 jest (jasmine  mocha)
4. loader plugin
5. 工程化面试
6. 没具体理解，kkb-pack里面.js配置代码的逻辑