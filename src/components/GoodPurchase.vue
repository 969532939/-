<template>
<div class="wrap">
    <Header></Header>
    <GList></GList>
          <div class="content clear">
          <div class="cont_item" v-for="item in arr">
              <router-link :to="{path:'/GoodPurchaseA',query:{id:item.id}}">
              <img :src="item.photo.path" alt="" class="phone">
              </router-link>
              <div class="mid_tit">
                  <p class="mid_tit_top" style="padding:0.05rem;box-sizing: border-box;color:#333333">{{item.msg}}</p>
                  <p style="padding:0.05rem;box-sizing: border-box;color:#999999">☆{{item.album.favorite_count}}</p>
              </div>
              <div class="bot_tit">
                  <span><img :src="item.photo.path" alt=""/></span>
                  <span>
                      <p class="name">{{item.sender.username}}</p>
                      <p class="collection">收集到 {{item.album.name}}</p>
                  </span>
              </div>
              
          </div>
      </div>
</div>
  
</template>

<script>
import Vue from "Vue";
import Axios from "axios";
import Header from "./header";
import GList from "./GList"
Vue.prototype.$Axios = Axios;
export default {
  components: { Header,GList},
  data() {
    return {
        arr:[]
    };
  },
   mounted(){
      Axios.get(
        '../../static/GoodPurchase.json'
        ).then(res=>{
          this.arr=res.data.data.object_list
          console.log(res.data.data.object_list)
        })
    }
};
</script>

<style>
.content{
    padding: 0.2rem;
    border: none;
    box-sizing: border-box;
    font-size: 0.22rem;
}
.content>div{
    float: left;
    width: 48.5%;
    margin-top: 0.2rem;
    border: 1px solid #DFE0DF;
    box-sizing: border-box;
    background: #ffffff;
}
.content>div .phone{
    width: 100%;
    height: 2.84rem;
    display: block;
}
.content>div:nth-child(2n){
    float: right
}
.content .bot_tit{
    padding-top: 0.2rem;
    height: 1.3rem;
    box-sizing: border-box;
    border-top: 1px solid #fafafa;
}
.content .bot_tit img{
    width: 0.4rem;
    height: 0.4rem;
    display: block;
    border-radius: 50%;
    float: left;
}
.bot_tit .name,.collection{
    line-height: 0.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mid_tit .mid_tit_top{
    line-height: 0.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
