安装：npm install typescript -g；
初始化项目配置package.json：npm init -y
初始化ts配置文件：tsconfig.json：tsc --init；
安装@types/node,npm install @types/node --dev-save进行安装。这个主要是解决模块的声明文件问题；
Ctrl+shift+B 快捷键会进行编译，初次编译会选择编译模式 (监视模式 是每当TS文件有变动就会自动编译，构建模式是手动命令编译时才会去编译,这里选择监视模式)；也可以使用命令行的方式：tsc hello.ts生成js文件；
调试配置的时候："program": "${workspaceFolder}\\target\\index.js"，workspaceFolder代表当前工作空间目录；