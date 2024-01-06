<!--
 * @Author: your name
 * @Date: 2019-10-27 12:54:43
 * @LastEditTime: 2019-10-27 13:59:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit c
 * @FilePath: \learning\src\components\plugins\msg.vue
 -->
<template>
    <div class="hello">
        <div :class="{active:msgStatus}" class="msg">
            <div>测试消息的框</div>
            <!-- <div class="msg-warpper"> -->
                <span>{{text}}</span>
            <!-- </div> -->
        </div>
    </div>
</template>
<script>
export default {
    name:'msg-show',
    props:{
        msg:String
    },
    data(){
        return{
            msgStatus:false,
            text:''
        }
    },
    methods:{
        msgPlugin(msg){
            this.text=msg;
            this.msgStatus=true
            setTimeout(()=>{
                this.msgStatus=false
            },2000)
        }
    }
}
</script>
<style scoped>
    .msg{
        position:absolute;
        left: 50%;
        top:30%;
        transform: translate(-50%,50%);
        width: 200px;
        min-height: 50px;
        text-align: center;
        background-color: rgba(243, 6, 6, 0.5);
        border-radius: 5px;
        color: #00F;
        transition: all 0.5s;
        z-index: -1;
        opacity:0;
    }
    .msg.active{
        width: 150px;
        background-color: rgba(243, 6, 6, 0.5);
        min-height: 25px;
        z-index: 11;
        opacity: 1;
    }
</style>