class zvue{
    constructor(options)
    {
        this.$options=options
        this.$data=options.data
        this.observe(this.$data)
        new Complie(options.el,this)
    }
    observe(value)
    {
        if(!value || typeof value!=='object')
        return
        Object.keys(value).forEach(key=>
            {
                this.defineRect(value,key,value[key])
                //代理data中的数据到vue实例上
                this.proxyData(key)
            })
    }
    proxyData(key)
    {
        Object.defineProperty(this,key,{
            get(){
                return this.$data[key]
            },
            set(newValue){
                this.$data[key]=newValue
            }
        })
    }
    defineRect(obj,key,value)
    {
        this.observe(value)
        const dep=new Dep()
        Object.defineProperty(obj,key,{
        get(){
            Dep.target && dep.addDep(Dep.target)
            // console.log(key)
            // console.log(dep.deps)
            return value;
        },
        set(newval){
            if(value!==newval)
            value=newval
            dep.notify()
        }
    })
    }
}
class Dep{
    constructor()
    {
        //存放watch,一个watch对应一个属性
        this.deps=[];

    }
    addDep(dep)
    {
        this.deps.push(dep)
    }
    notify()
    {
        this.deps.forEach(dep=>dep.update())
    }  
}
class Watch{
    constructor(vm,key,cb)
    {
        this.vm=vm
        this.key=key
        this.cb=cb
        Dep.target=this
        this.vm[this.key]//触发getter，添加依赖
        Dep.target=null
    }
    update()
    {
        // console.log(this.key)
        this.cb.call(this.vm,this.vm[this.key])
    }
}