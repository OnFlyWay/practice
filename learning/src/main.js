/*
 * @Author: your name
 * @Date: 2019-04-14 00:25:50
 * @LastEditTime: 2019-10-27 13:23:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learning\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import plugins from './components/plugins'
// import "./temp"
Vue.use(plugins)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
