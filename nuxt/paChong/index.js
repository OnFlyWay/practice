const http=require('http')
http.createServer(function(request,response){
    if(request.url==='/'){
        console.log('sadf')
        http.get('http://xyrs.xys.gov.cn/micro/3793.jspx',Response=>{
        var html=''
        Response.on('data',function(text){
            html+=text
        }) 
        Response.on('end',function(){
            console.log('end')
            console.log(html)
        })   
        })
    }
}).listen(8080)