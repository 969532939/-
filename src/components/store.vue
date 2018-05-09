<template>
  <div class="wrap">
      <Header></Header>
      <div class="lunbo">
          <mt-swipe :auto="4000">
          <mt-swipe-item><img src="../../static/images/75.jpeg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../../static/images/76.jpeg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../../static/images/75.jpeg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../../static/images/76.jpeg" alt=""></mt-swipe-item>
          </mt-swipe>
      </div>
      <div class="store_list clear">
          <div>
              <img src="../../static/images/68.png" alt="">
              <p>护肤</p>
          </div>
          <div>
              <img src="../../static/images/70.png" alt="">
              <p>彩妆</p>
          </div>
          <div>
              <img src="../../static/images/69.png" alt="">
              <p>个人护理</p>
          </div>
          <div>
              <img src="../../static/images/66.png" alt="">
              <p>服饰箱包</p>
          </div>
          <div>
              <img src="../../static/images/63.png" alt="">
              <p>文具手账</p>
          </div>
          <div>
              <img src="../../static/images/65.png" alt="">
              <p>居家</p>
          </div>
          <div>
              <img src="../../static/images/71.png" alt="">
              <p>美食</p>
          </div>
          <div>
              <img src="../../static/images/67.png" alt="">
              <p>堆糖制品</p>
          </div>
          <div>
              <img src="../../static/images/64.png" alt="">
              <p>畅销单品</p>
          </div>
          <div>
              <img src="../../static/images/46.png" alt="">
              <p>全部分类</p>
          </div>
      </div>
      <div class="xinping clear">
          <div>
              <p class="title">新品速递</p>
              <p class="time">每周一、四更新</p>
              <img src="../../static/images/50.jpeg" alt="">
          </div>
          <div>
              <p class="title">口碑排行</p>
              <p class="time">每周三更新</p>
              <img src="../../static/images/73.jpeg" alt="">
          </div>
          <div>
              <p class="title">4月会员礼</p>
              <p class="time">每周更新小礼物</p>
              <img src="../../static/images/74.png" alt="">
          </div>
      </div>
      <div class="zhuanti clear">
          <div class="title">- 专题 -</div>
          <div class="zhuanti_cont">
              <div class="img">
                  <img src="../../static/images/75.jpeg" alt="">
              </div>
              <div class="zhuanti_store clear">
                  <div>
                      <img src="../../static/images/51.jpeg" alt="">
                      <p class="store_title">最有效的肌肤保护罩</p>
                      <p class="price">￥155 <span style="color:#aaaaaa"><s>￥195</s></span></p>
                  </div>
                  <div>
                      <img src="../../static/images/58.jpeg" alt="">
                      <p class="store_title">日本断货王</p>
                      <p class="price">￥52.25 <span style="color:#aaaaaa"><s>￥55</s></span></p>
                  </div>
                  <div>
                      <img src="../../static/images/59.jpeg" alt="">
                      <p class="store_title">必备止汗消臭石</p>
                      <p class="price">￥61.75 <span style="color:#aaaaaa"><s>￥65</s></span></p>
                  </div>
              </div>
          </div>
          <div class="zhuanti_cont">
              <div class="img">
                  <img src="../../static/images/57.jpeg" alt="">
                  <p class="t1">服装配饰专场></p>
                  <p class="t2">衣服上的小心机</p>
                  <p class="t3">查看详情</p>
              </div>
              <div class="zhuanti_store clear">
                  <div>
                      <img src="../../static/images/81.jpeg" alt="">
                      <p class="store_title">颜值爆表 防蚊利器</p>
                      <p class="price">￥98</p>
                  </div>
                  <div>
                      <img src="../../static/images/82.jpeg" alt="">
                      <p class="store_title">春日活力少女</p>
                      <p class="price">￥135</p>
                  </div>
                  <div>
                      <img src="../../static/images/83.jpeg" alt="">
                      <p class="store_title">简约冷淡</p>
                      <p class="price">￥56</p>
                  </div>
              </div>
          </div>
          <div class="zhuanti_cont">
              <div class="img">
                  <img src="../../static/images/78.jpeg" alt="">
                  <p class="t1">服装配饰专场></p>
                  <p class="t2">踏青春游 可别忘记防晒</p>
                  <p class="t3">查看详情</p>
              </div>
              <div class="zhuanti_store clear">
                  <div>
                      <img src="../../static/images/51.jpeg" alt="">
                      <p class="store_title">清爽无油不搓泥</p>
                      <p class="price">￥45</p>
                  </div>
                  <div>
                      <img src="../../static/images/58.jpeg" alt="">
                      <p class="store_title">Comse 殿堂奖防晒</p>
                      <p class="price">￥85</p>
                  </div>
                  <div>
                      <img src="../../static/images/59.jpeg" alt="">
                      <p class="store_title">妆后防晒不花脸</p>
                      <p class="price">￥69</p>
                  </div>
              </div>
          </div>
          <div class="zhuanti_cont">
              <div class="img">
                  <img src="../../static/images/77.jpeg" alt="">
                  <p class="t1">#不二主义</p>
                  <p class="t2">放假好累，我想上班</p>
                  <p class="t3">查看详情</p>
              </div>
              <div class="zhuanti_store store_foot clear">
                  <div>
                      <img src="../../static/images/84.jpeg" alt="">
                      <p class="store_title">地域网红美食来袭</p>
                  </div>
                  <div>
                      <img src="../../static/images/85.jpeg" alt="">
                      <p class="store_title">今夏必屯热门防晒霜</p>
                  </div>
              </div>
          </div>
          <div class="zhuanti_cont">
              <div class="img">
                  <img src="../../static/images/81.jpeg" alt="">
                  <p class="t1">彩色办公专场></p>
                  <p class="t2">贴出你的个性</p>
                  <p class="t3">查看详情</p>
              </div>
              <div class="zhuanti_store clear">
                  <div>
                      <img src="../../static/images/60.jpeg" alt="">
                      <p class="store_title">手账美貌搭配</p>
                      <p class="price">￥38</p>
                  </div>
                  <div>
                      <img src="../../static/images/61.jpeg" alt="">
                      <p class="store_title">上班与上学的日子</p>
                      <p class="price">￥38</p>
                  </div>
                  <div>
                      <img src="../../static/images/72.jpeg" alt="">
                      <p class="store_title">吸猫大法好</p>
                      <p class="price">￥16.8</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
</template>

<script>
import Vue from "Vue";
import Axios from "axios";
import Header from "./header";
Vue.prototype.$Axios = Axios;
export default {
    components: { Header},    

}
</script>

<style>
.lunbo{
    width: 100%;
    height: 3.2rem;
}
.lunbo img{
    width: 100%;
    height: 100%;
    display: block;
}
.store_list{
    background: #fff;
}
.store_list>div{
    width: 20%;
    height: 1.52rem;
    float: left;
    font-size: 0.23rem;
    text-align: center;    
}
.store_list>div img{
    display: block;
    margin: auto;
    width: 0.72rem;
    height: 0.72rem;
    margin-top: 0.2rem;
}
.store_list>div p{
    margin-top: 0.1rem;
}
.xinping{
    background: #fff;
    padding-top: 0.5rem;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #E2E2E2;
}
.xinping>div{
    width: 33.3333333%;
    float: left;
    text-align: center;
}
.xinping>div .title{
    font-size: 0.32rem;
    color: #535353;
}
.xinping>div .time{
    font-size: 0.2rem;
    color: #c9c9c9;
    margin-top: 0.1rem;
}
.xinping>div>img{
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    margin: auto;
}
.zhuanti{
    margin-top: 0.3rem;
}
.zhuanti .title{
    color: #444444;
    line-height: 1.25rem;
    background: #fff;
    font-size: 0.35rem;
    text-align: center;

}
.zhuanti_cont{
    width: 95%;
    margin: auto;
    background: #fff;
    margin-bottom: 0.2rem;
    padding-bottom: 0.2rem;
}
.zhuanti_cont .img{
    position: relative;
}
.zhuanti_cont .img p{
    position: absolute;
    color: #fff;
    text-align: center;
    left: 0;
    right: 0;
    margin: auto;
}
.zhuanti_cont .img .t1{
    font-size: 0.3rem;
    top: 0.4rem;
}
.zhuanti_cont .img .t2{
    font-size: 0.5rem;
    top: 0.9rem;
}
.zhuanti_cont .img .t3{
    font-size: 0.25rem;
    top: 1.8rem;
    width: 1.96rem;
    height: 0.6rem;
    line-height: 0.6rem;
    border-radius: 0.3rem;
    border: 1px solid #fff;
}
.zhuanti_cont .img img{
    width: 100%;
    height: 3rem;
    display: block;
}
.zhuanti_store>div{
    width: 33.33333%;
    float: left;
}
.zhuanti_store>div img{
    width: 1.8rem;
    height: 1.8rem;
    display: block;
    margin: auto;
    margin-top: 0.2rem;
}
.zhuanti_store>div .store_title{
    width: 90%;
    font-size: 0.22rem;
    text-align: center;
    white-space: nowrap;  
    text-overflow:ellipsis; 
    overflow:hidden;
    text-align: center;
    margin: auto;
    margin-top: 0.2rem;
}
.zhuanti_store>div .price{
    font-size: 0.24rem;
    text-align: center;
    white-space: nowrap;  
    text-overflow:ellipsis; 
    overflow:hidden;
    text-align: center;
    color: #ff0000;
    margin-top: 0.2rem;
}
.store_foot>div{
    width: 50%;
}
.store_foot>div img{
    width: 90%;
}
</style>
