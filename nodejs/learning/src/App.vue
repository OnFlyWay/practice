<!--
 * @Author: your name
 * @Date: 2019-04-14 00:25:50
 * @LastEditTime: 2019-10-27 14:00:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learning\src\App.vue
 -->
<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  <button @click="showMsg">消息提示</button>
  <msg-show ref="msgShow"></msg-show>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  methods:{
    showMsg(){
      this.$refs.msgShow.msgPlugin('这是消息测试')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
