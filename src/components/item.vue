<template>
  <div class="wrap">
      <Header></Header>
      <div class="lunbo">
          <mt-swipe :auto="4000">
          <mt-swipe-item><img src="../../static/images/9.jpeg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../../static/images/15.jpeg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../../static/images/20.jpeg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../../static/images/28.jpeg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../../static/images/32.jpeg" alt=""></mt-swipe-item>
          </mt-swipe>
      </div>
      <div class="list clear">
          <div><router-link to="/GoodPurchase"><img src="../../static/images/33.png" alt=""></router-link><p>良品购</p></div>
          <div><router-link to="/store"><img src="../../static/images/34.png" alt=""></router-link><p>商店</p></div>
          <div><img src="../../static/images/35.png" alt=""><p>美食菜谱</p></div>
          <div><img src="../../static/images/36.png" alt=""><p>家居生活</p></div>
          <div><img src="../../static/images/37.png" alt=""><p>壁纸</p></div>
          <div><img src="../../static/images/38.png" alt=""><p>头像</p></div>
          <div><img src="../../static/images/39.png" alt=""><p>表情</p></div>
          <div><router-link to="/moreList"><img src="../../static/images/40.png" alt=""><p style="color:#666">更多分类</p></router-link></div>
      </div>
      <div class="content clear">
          <div class="cont_item" v-for="item in arr">
              <router-link :to="{path:'/itemA',query:{id:item.id}}">
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
import { Swipe, SwipeItem } from "mint-ui";
import Vue from "Vue";
import Axios from "axios"
import Header from "./header"
Vue.prototype.$Axios=Axios
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
export default {
    components: {Header},
    data(){
        return{
      arr:[]
        }
    },
    methods:{
        
    },
    mounted(){
      Axios.get(
        '../../static/item.json'
        ).then(res=>{
          this.arr=res.data.data.object_list
          console.log(res)
        })
    }
};
</script>

<style>
Header{
    display: block;
}
.lunbo{
    width: 100%;
    height: 4rem;
}
.lunbo img{
    width: 100%;
    height: 100%;
    display: block;
}
.list{
    width: 100%;
    border-bottom: 1px solid #DFE0DF;
}
.list>div{
    width: 25%;
    height: 1.45rem;
    box-sizing: border-box;
    text-align: center;
    float: left;
    font-size: 0.18rem;
    color: #666;
    background: #fff;
}
.list>div:nth-child(1){
    border-right: 1px solid #DFE0DF;
}
.list>div:nth-child(2){
    border-right: 1px solid #DFE0DF;
}
.list>div:nth-child(3){
    border-right: 1px solid #DFE0DF;
}
.list>div:nth-child(5){
    border-right: 1px solid #DFE0DF;
}
.list>div:nth-child(6){
    border-right: 1px solid #DFE0DF;
}
.list>div:nth-child(7){
    border-right: 1px solid #DFE0DF;
}
.list>div:nth-child(5){
    border-top: 1px solid #DFE0DF;
}
.list>div:nth-child(6){
    border-top: 1px solid #DFE0DF;
}
.list>div:nth-child(7){
    border-top: 1px solid #DFE0DF;
}
.list>div:nth-child(8){
    border-top: 1px solid #DFE0DF;
}
.list img{
    display: block;
    margin: auto;
    margin-top: 0.3rem
}
.list p{
    border: none;
}
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
