<template>
  <div class="wrap">
      <Header></Header>
      <div class="title">请先登录！</div>
      <div class="loginContent">
          <div>用户名：<input type="text" name="" id="" ref="username" placeholder="请输入用户名"></div>
          <div>密码：&nbsp;&nbsp;&nbsp;<input type="text" name="" id="" ref="password" placeholder="请输入密码"></div>
          <button class="btn" @click="login">登录</button>
      </div>
      
  </div>
</template>

<script>
import Axios from "axios";
import Header from "./header";

export default {
  components: { Header },
  data() {
    return{
        username:"",
        password:""
    }
  },
  methods:{
      login(){
      Axios({
        url:"/api/Handler/AdminRegHandler?action=login",
        method:"post",
        data:{
             userName: this.$refs.username.value,
             password: this.$refs.password.value
        }

      }).then(res=>{
         if (res.data.success) {
            console.log(res.data)
          window.location.href="/";
        }else{
          alert("账号或密码错误")
        }
      })
    }
  }
};
</script>

<style>
body {
  background: #fafafa;
}
.title {
  font-size: 0.4rem;
  text-align: center;
  padding-top: 0.5rem;
}
.loginContent {
  font-size: 0.3rem;
  width: 4.5rem;
  margin: auto;
}
.loginContent > div {
  margin-top: 0.4rem;
}
.loginContent input{
    height: 0.4rem;
}
.loginContent button {
  display: block;
  width: 1.6rem;
  height: 0.7rem;
  text-align: center;
  line-height: 0.7rem;
  border: none;
  background: #ed5353;
  color: #fff;
  margin: 0.8rem auto;
  border-radius: 0.08rem;
}
</style>
