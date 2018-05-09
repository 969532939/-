<template>
  <div class="block clear">
      <div class="header clear">
          <div class="logo"><router-link to="/"><img src="../../static/images/41.png" alt=""></router-link></div>
          <div class="appOpen btn">App打开</div>
          <div class="download btn"><router-link to="/login">登录</router-link></div>
          <div style="margin-top:0.1rem; color:#ED5353" class="nav">欢迎 "{{name}}"！！<button @click="quit">退出登录</button></div>
      </div>
  </div>
</template>

<script>
import Axios from "axios"
export default {
    data(){
        return{
            name:""
        }
    },
    methods:{
    getInfo(){
      Axios({
        url: "/api/Handler/AdminLoginHandler?action=returninfo",
        method:"get"
      }).then(res=>{
        console.log(res)
        this.name=res.data.data.userName
      })
    },
    //退出登录
    quit(){
      Axios({
        url:"/api/Handler/AdminLoginHandler?action=quit",
        method:"get"
      }).then(res=>{
        if(res.data.success){
          alert(res.data.success)
          //  this.$router.push("home")
           window.location.href="/login";
        }
      })

    },

},
mounted(){
    this.getInfo()
}
}
</script>

<style>
.block{
    display: block;
}

.header{
    background: #fff;
    padding: 0.15rem;
    box-sizing: border-box;
    display: block;
}
.header>div{
     float: left;
     font-size: 0.23rem;
     box-sizing: border-box;
     display: block;
}
.header>.btn{
    width: 1.4rem;
    height: 0.65rem;
    text-align: center;
    line-height: 0.65rem;
    margin-top: 0.15rem;
}
.header .logo img{
    display: block;
    width: 2.6rem;
    height: 0.9rem;
}
.header .appOpen{
    border: 1px solid #ed5353;
    border-radius: 0.05rem;
    color: #ed5353;
    margin-left: 0.3rem;
}
.header .download{
    float: right;
    background: #ed5353;
    border-radius: 0.05rem;
    color: #fff;
}
.header .nav{
    width: 100%;
    padding-left: 0.2rem;
    box-sizing: border-box;
}
.header .nav{
    font-size: 0.3rem;
    line-height: 0.6rem;
}
.header .nav button{
    float: right;
    width: 1.5rem;
    border: none;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    background: #ed5353;
    color: #fff;
    border-radius: 0.06rem;
}
</style>
