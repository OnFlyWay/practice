const fs = require("fs");

//fs  核心模块中提供了一个  fs.readFile方法,来读取指定目录下的文件
//fs.resdFile 三个参数

// 1,读取文件的路径
// 2,读取文件的编码格式
// 3,当文件读取完成,调用这个callback回调函数来读取文件的结果
//第一个参数文error对象   第二个参数 才是读取成功的结果
// fs.readFile('./http/111.txt','utf-8',function(error,data){
// console.log(error);  //如果err为null就说明读取成功了,没有出错
// console.log(data); // 如果不给第二个参数[读取的文件编码格式]就会以beffer格式输出
// });
fs.readFile("./http/111.txt", "utf-8", function(error, data) {
  // console.log(error);  //如果err为null就说明读取成功了,没有出错
  // console.log(data); // 如果不给第二个参数[读取的文件编码格式]就会以beffer格式输出

  //  用error来判断文件是否读取成功
  if (error) return console.log("读取文件失败,内容是" + error.message);
  console.log("读取文件成功,内容是" + data);
});