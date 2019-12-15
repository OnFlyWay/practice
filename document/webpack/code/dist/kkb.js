

!function(modules){
  // 缓存
  const installModules = {}
  function __kkbpack_require__(moduleId){
    // 是否缓存
    if(installModules[moduleId]){
      return installModules[moduleId].exports
    }
    let module = installModules[moduleId] = {
      exports: {}
    }
    console.log()
    modules[moduleId].call(modules.exports, module, module.exports, __kkbpack_require__)
    return module.exports
  }
  // 入口
  return __kkbpack_require__("./src/index.js")
}({"./src/index.js":function(module, exports, __kkbpack_require__){
        eval(`const sayHi = __kkbpack_require__("./src/a.js")

sayHi('开课吧')`)
      }
      ,"./src/a.js":function(module, exports, __kkbpack_require__){
        eval(`const sayAge = __kkbpack_require__("./src/common/util.js")
module.exports = (name)=>{
  console.log('hello world'+ name)
  sayAge(18)
}
`)
      }
      ,"./src/common/util.js":function(module, exports, __kkbpack_require__){
        eval(`module.exports = (age)=>{
  console.log('你今年'+age+'岁了')
}`)
      }
      ,})