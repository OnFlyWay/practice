<template>
  <div id="app">
    <input type="text" value="id" v-model="id"/>
    <input type="text" value="name" v-model="name"/>
    <input type="button" value="add" @click="add"/>
    <transition-group appear tag="ul">
    <li v-for="(item,index) in items" :key="item.id" @click="remove(index)">
        {{item.id}}--{{item.name}}--{{item.content}}
    </li>
    </transition-group>
    <input type="button" value="toggle" @click="flag=!flag"/>
    <transition @before-enter="be" @enter="enters" @after-enter="afterEnter">
       <div v-if="flag" class="ball"></div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'apps',
  data:function(){
      return{
          id:'',
          name:'',
          items:[
            {
                  id:1,
                  name:'a',
                  content:'ha'
            },
              {
                  id:2,
                  name:'b',
                  content:'hb'
                  },
                  {
                      id:3,
                  name:'c',
                  content:'h3'
                  },
          ],
          flag:false
      }
  },
  methods:{
      be(el){
          el.style.transform="translate(30,180)"
      },
      enters(el,done){
          el.offsetWidth;
          el.style.transform="translate(150px,0)"
          el.style.transition="all 1s ease"
          done()
      },
      afterEnter(el){
          this.flag=!this.flag
      },
      add(){
          this.items.push({id:this.id,name:this.name})
      },
      remove(index){
          this.items.splice(index,1)
      }
  }
}
</script>

<style>
/* .v-enter,
.v-leave-to{
    opacity: 0;
    transform: translateY(150px);
}
.v-enter-active,
.v-leave-active{
    transition: all 0.8s ease;
} */
/* .v-move{
    transition: all 0.8s ease;
}
.v-leave-active{
    position: absolute;
}  */
.ball{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: red;
}
</style>
