<template>
<div>
    <router-view></router-view>
      <div class="G_list">
        <div class="G_list_top clear">
            <div><router-link to="/jacket">#上衣</router-link></div>
            <div><router-link to="/pantskirt">#裤裙</router-link></div>
            <div>#配饰</div>
            <div>#鞋子</div>
        </div>
        <div class="G_list_bot clear">
            <div style="margin-left:1.5rem;">#包袋</div>
            <div>#日杂</div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.G_list{
      width: 100%;
      height: 2.35rem;
      background: #9f9f9f;
      padding: 0.4rem;
      box-sizing: border-box;
  }
  .G_list>div>div{
      float: left;
      width: 1.1rem;
      height: 0.68rem;
      color: #fff;
      font-size: 0.3rem;
      border: 1px solid #fff;
      text-align: center;
      line-height: 0.68rem;
      border-radius: 0.1rem;
  }
  .G_list>.G_list_top>div{
      margin-left: 0.2rem;
  }
  .G_list>.G_list_bot{
      margin-top: 0.2rem;
  }
  .G_list>.G_list_bot>div{
      margin-left: 0.2rem;
  }
</style>
