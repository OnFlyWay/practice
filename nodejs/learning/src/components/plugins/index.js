/*
 * @Author: your name
 * @Date: 2019-10-27 13:05:32
 * @LastEditTime: 2019-10-27 13:11:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learning\src\components\plugins\index.js
 */
const reqiureComponent=require.context('./',true,/\.vue$/);
const install=(Vue)=>{
    if(install.installed) return
    install.installed
    reqiureComponent.keys().map(component=>{
        const config=reqiureComponent(component)
        const componentName=config.default.name;
        Vue.component(componentName,config.default||config)
    })
}
export default{
    install
}