/*
 * @Author: your name
 * @Date: 2019-10-24 21:36:48
 * @LastEditTime: 2019-10-24 22:26:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \paChong\test1.js
 */
var mammoth = require("mammoth");
var xlsx = require('node-xlsx');
var fs = require('fs');
const label=['编号','题型','题干','选项','解析','考点','地区','来源','编辑','知识结构']
//读取文件内容
function writeFile(data){
    var buffer = xlsx.build([
    {
        name:'sheet1',
        data:data
    }
  ]);
  //将文件内容插入新的文件中
  fs.writeFileSync('test.xlsx',buffer,{'flag':'w'});
}
var readDir = fs.readdirSync("./")
// var readDir = ['（八十八套）10-2016年河南市开封市尉氏县教师招聘考试试题-教育学 张茜编校-齐亚楠（一校）+李妍洁2校.docx']

for(let docName of readDir){
    if(docName.endsWith('.docx')){
        mammoth.extractRawText({path: './'+docName}).then(function(result){
            var obj = xlsx.parse(__dirname+'/test1.xlsx');
            const data=obj[0].data
            if(!obj[0].data.length){
                data.push(label)
            }
            const dataLength=data.length-1
            const temp=result.value.replace(/\n/g,'')
            let first=temp.split(/【题型】/)
            for(let [index0,title] of first.entries()){
            if(!title.length) continue
                let titleType=title.substr(0,3)
                let subData=Array(label.length).fill('')
                subData[0]=index0+dataLength
                subData[1]=titleType
                let second=title.substring(3).split(/【/)
                for(let ele of second)
                {
                    if(!ele.length) continue
                    for(let [index,value] of label.entries()){
                        if(ele.startsWith(value)){
                            let temp=ele.split(/】/)[1]
                            if(value==='知识结构'){
                                let newDates=temp.split('；')[0].split('#')
                                newDates.splice(0,3)
                                for(let i=0;i<newDates.length;i++){
                                    subData[parseInt(index)+i]=newDates[i]
                                }
                            }
                            else{
                                subData[parseInt(index)]=temp
                            }
                            break
                        }
                    }
                }
                data.push(subData)
            }
            writeFile(data)
        }).done();
    }
}