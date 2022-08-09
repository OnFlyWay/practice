let b='a'
(function b(){
  console.log(this.b)
  b=5
  console.log(b)
})()