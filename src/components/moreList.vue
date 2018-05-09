<template>
  <div>
     <Header></Header>
     <div class="moreCont">
         <div class="list1 clear">
             <div class="listLeft">
                <a href="/GoodPurchase" style="color:#333333">良品购</a>
             </div>
             <div class="listRight">
                 <a href="/store" style="color:#333333">商店</a>
             </div>
         </div>
         <div class="list2 moreList clear">
             <div class="listLeft">
                 <div>
                     <span class="dian"></span>
                     <span>美食菜谱</span>
                 </div>
                 <div>
                     <span class="dian"></span>
                     <span>家居生活</span>
                 </div>
                 <div>
                     <span class="dian"></span>
                     <span>影音书</span>
                 </div>
             </div>
             <div class="listRight">
                 <div>
                     <span class="dian"></span>
                     <span>壁纸</span>                     
                 </div>
                 <div>
                     <span class="dian"></span>
                     <span>头像</span>                     
                 </div>
                 <div>
                     <span class="dian"></span>
                     <span>表情</span>                     
                 </div>
             </div>
         </div>
         <div class="list3 moreList clear">
             <div class="listLeft">
                 <div>
                     <span class="dian"></span>
                     <span>时尚搭配</span>                     
                 </div>
                 <div>
                     <span class="dian"></span>
                     <span>美容美妆</span>                    
                 </div>
                 <div>
                     <span class="dian"></span>
                     <span>美发造型</span>                     
                 </div>
             </div>
             <div class="listRight">
                 <div>
                     <span class="dian"></span>
                     <span>文字句子</span>                     
                 </div>
                 <div>
                     <span class="dian"></span>
                     <span>收工DIY</span>                     
                 </div>
                 <div>
                     <span class="dian"></span>
                     <span>插画绘画</span>                     
                 </div>
             </div>
         </div>
         <div class="list4 moreList clear">
             <div class="listLeft">
                 <div>
                     <span class="dian"></span>
                     <span>婚礼婚纱</span>                     
                 </div>
                 <div>
                     <span class="dian"></span>
                     <span>旅行</span>                     
                 </div>
                 <div>
                     <span class="dian"></span>
                     <span>摄影</span>                  
                 </div>                 
             </div>
             <div class="listRight">
                 <div>
                     <span class="dian"></span>
                     <span>人物明星</span>        
                 </div>
                 <div>
                     <span class="dian"></span>
                     <span>动画漫画</span>                 
                 </div>
                 <div>
                     <span class="dian"></span>
                     <span>搞笑萌宠</span>                   
                 </div>                 
             </div>
         </div>
     </div>
  </div>
</template>

<script>
import Header from "./header";
export default {
components: { Header },
}
</script>

<style>
.moreCont>div{
    border-bottom: 1px solid #e0e0e0;
    font-size: 0.3rem;
    color: #333333
}
.list1{
    height: 1.44rem;
    background: #fff;
}
.list1>div{
    line-height: 1.44rem;
    text-align: center;
}
.moreList{
    height: 3.1rem;
    background: #fff;
}
.moreCont>div>div{
    width: 50%;
    float: left;
    box-sizing: border-box;
}
.moreCont>div>.listLeft{
    width: 50%;
    height: 100%;
    border-right: 1px solid #e0e0e0;
}
.moreCont>div>div span{
    display: inline-block;
}
.moreCont>div>div .dian{
    width: 0.12rem;
    height: 0.12rem;
    background: #83C0AE;
    border-radius: 50%;
    margin-right: 0.1rem;
}
.moreCont>div>div>div{
    margin-top: 0.3rem;
}
.moreCont>.moreList>div{
    padding-top: 0.3rem;
    padding-left: 0.3rem;
    box-sizing: border-box;
}
.moreCont>.list3 .dian{
    background: #C49AD5;
}
.moreCont>.list4 .dian{
    background: #F8DD66;
}
</style>
