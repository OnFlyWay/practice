/*
 * @Author: your name
 * @Date: 2019-10-23 22:23:46
 * @LastEditTime: 2019-10-24 22:10:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \paChong\test.js
 */
var mammoth = require("mammoth");

var xlsx = require('node-xlsx');

var fs = require('fs');

// mammoth.extractRawText({path: "./test.docx"})
//     .then(function(result){
//       // console.log(result.value.replace(/\n/g,''));
//       const temp=result.value.replace(/\n/g,'');
//       const data=[]
//       data[0]=temp.split(/【题型】/)
// for(let element of data[0]){
//     let tempType=element.substr(0,3)
//     let temps=element.slice(3)
//     const tempss=temps.split(/【/)
//     for(let (ele of tempss){
//         if(tempss.match(/题型】/)){
//             data[]
//         }
//         else if(tempss.match(/题干】/))
//     }
// }
//       console.log(data[0])
//     // var text = result.value; // The raw text 
//     // console.log(text)
//     // console.log(text.replace('\n',''));
// //     writeFile(data)
// }).done();
//读取文件内容
//  var obj = xlsx.parse(__dirname+'/test.xlsx');
//  var excelObj=obj[0].data;
//  console.log(excelObj);
// var data = [];
// for(var i in excelObj){
//   var arr=[];
//   var value=excelObj[i];
//   for(var j in value){
//     arr.push(value[j]);
//   }
//   data.push(arr);
// }
// function writeFile(data){
//   var buffer = xlsx.build([
//     {
//       name:'sheet1',
//       data:data
//     }
//   ]);
//   //将文件内容插入新的文件中
//   fs.writeFileSync('test1.xlsx',buffer,{'flag':'w'});
// }