const promiseCopy=function(fn){
  this.info={
    status:"pending",
    values:''
  }
  const self=this
  self.onFulfilledArr=[]
  self.onRejectedArr=[]
  const _resolve=function(value){
    resolve(self,value)
  }
  const resolve=function(promise,value){
    let ifexec=false
    if(value===promise){
      reject(new TypeError('ERROR'))
    }
    if(value && (Object.prototype.toString.call(value)==="[object object]")){
      try{
        const then=value.then
        if(typeof then==='function'){
        then.call(value,function(value){
          if(ifexec){return}
        })
        ifexec=true
        resolve(promise,value)
        }
      }.catch(e){
        reject(e)
      }
    }
    if(this.info.status==='pending'){
      self.info.status="onFulfilled"
      self.info.value=value
      self.onFulfilledArr.forEach(fn=>fn(value))
    }
  }
  const reject=function(value){
    if(this.info.status==='pending'){
      self.info.status="onRejected"
      self.info.value=value
      self.onRejectedArr.forEach(fn=>fn(value))
    }
  }
  try{
    fn(_resolve,reject)
  }.catch(e){
    setTimeout(()=>{
      self.onRejectedArr.forEach(fn=>fn(e))})
  }
}
PromiseCopy.prototype.then = function (onFulfilled, onRejected) {
  const self = this;

  // 这个一定要这么写目的为了让值传递
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (val) => val;

  // 这个一定要这么写，一定要抛出一个错throw err
  onRejected =    typeof onRejected === "function"      ? onRejected : (err) => {  throw err; };

  const newPromise = new PromiseCopy((resolve, reject) => {
    if (self.info.status === "onFulfilled") {
      setTimeout(() => {
        try {
          // 如果onFulfilled不是一个函数resolve--self.info.value
          let value = self.info.value;
          value = onFulfilled(value);

          // 这里要做一个[[Resolve]](promise2, x)处理了
          // 因为resolve里面直接做了，所以直接调用，和网上的一些实现有点不一样
          // 他们是提取了一个resolvePromise函数调用，我是直接调用了resolve
          resolve(value);
        } catch (e) {
          reject(e);
        }
      });
    }

    // 注意这里根据上面可知onFulfilled，onRejected抛出的值都要经过[[Resolve]](promise2, x)
    // 这和resolve,reject不一样，promise中resolve才走[[Resolve]](promise2, x)，reject不走
    if (self.info.status === "onRejected") {
      setTimeout(() => {
        try {
          let { value } = self.info;

          value = onRejected(self.info.value);

          resolve(value);
        } catch (e) {
          reject(e);
        }
      });
    }

    // 如果是pending状态也需要push
    if (self.info.status === "pending") {
      self.onFulfilledArr.push((data) => {
        setTimeout(() => {
          try {
            let value = data;
            value = onFulfilled(value);

            resolve(value);
          } catch (e) {
            reject(e);
          }
        });
      });

      self.onRejectedArr.push((data) => {
        setTimeout(() => {
          try {
            let value = data;

            value = onRejected(data);

            resolve(value);
          } catch (e) {
            reject(e);
          }
        });
      });
    }
  });

  return newPromise;
};