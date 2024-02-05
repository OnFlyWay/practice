class Complie {
    constructor(el, vm) {
        this.$el = document.querySelector(el)
        this.$vm = vm
        if (this.$el) {
            this.$fragment = this.node2Fragment(this.$el)
            //执行变异
            this.compile(this.$fragment)
            this.$el.appendChild(this.$fragment)
        }
    }
    node2Fragment(el) {
        const frag = document.createDocumentFragment()
        let child;
        while (child = el.firstChild) {
            frag.appendChild(child)
        }
        return frag
    }
    compile(el) {
        const childNodes = el.childNodes
        Array.from(childNodes).forEach(node => {
            if (this.isElement(node)) {
                //console.log('编译元素'+node.nodeName)
                //@ k :开头的
                const nodeAttrs = node.attributes
                Array.from(nodeAttrs).forEach(attr => {
                    const attrName = attr.name
                    const exp = attr.value
                    if (this.isDirective(attrName)) {
                        const dir = attrName.substring(2)
                        this[dir] && this[dir](node, this.$vm, exp)
                    } else if (this.isEvent(attrName)) {
                        const dir = attrName.substring(1)
                        this.eventHandler(node,this.$vm,exp,dir)
                        
                    }
                })
            } else if (this.isText(node)) {
                // console.log('编译文本'+node.textContent)
                this.compileText(node)
            }
            //递归实现编译
            if (node.childNodes && node.childNodes.length > 0) {
                this.compile(node)
            }
        })
    }
    compileText(node) {
        // console.log(RegExp.$1)
        // node.textContent=this.$vm.$data[RegExp.$1]
        this.update(node, this.$vm, RegExp.$1, 'text')
    }
    update(node, vm, exp, dir) {
        const updateFn = this[dir + 'Updater']
        //初始化
        updateFn && updateFn(node, vm[exp])
        //如果没有数据更新，就不会调用收集依赖函数
        new Watch(vm, exp, function (value) {
            updateFn && updateFn(node, value)
        })
    }
    eventHandler(node,vm,exp,dir){
        // dir 函数名
        let fn=vm.$options.methods && vm.$options.methods[exp]
        if(dir && fn){
            node.addEventListener(dir,fn.bind(vm))
        }
    }
    text(node, vm, exp) {
        this.update(node, vm, exp, 'text')
    }
    model(node, vm, exp) {
        this.update(node, vm, exp, 'model')
        node.addEventListener("input",e=>{
            vm[exp]=e.target.value
        })
    }
    modelUpdater(node, value) {
        node.value = value
    }
    textUpdater(node, value) {
        node.textContent = value
    }
    html(node, vm, exp) {
        this.update(node, vm, exp, 'html')
    }
    htmlUpdater(node, value) {
        node.innerHTML = value
    }
    isDirective(attr) {
        return attr.indexOf('k-') == 0
    }
    isEvent(attr) {
        return attr.indexOf('@') == 0
    }
    isElement(node) {
        return node.nodeType === 1;
    }
    isText(node) {
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }
}