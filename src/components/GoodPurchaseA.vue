<template>
  <div class="wrap">
      <Header></Header>
      <div class="itemaCont">
          <img :src="img" alt="" class="phone_c">
          <div class="title">{{name}}</div>
          <div class="info clear">
            <div class="name_p">
               <img :src="img">
            </div>
            <div class="infoM">
              <p style="color:blue;">{{name}}</p>
              <p>收集到{{album}}</p>
            </div>
            <div class="day">{{day}}天前</div>
          </div>
      </div>
      <g-list></g-list>
  </div>
</template>

<script>
import Vue from "Vue";
import Axios from "axios";
import Header from "./header";
import "../css/xiangqing.css"
export default {
    components: { Header},
    data(){
        return{
           arr: [],
           img: "",
           name: "",
           album: "",
           day: ""
        }
    },
    mounted() {
    Axios.get("../../static/GoodPurchase.json").then(res => {
      this.arr = res.data.data.object_list;
      console.log(res.data.data.object_list);
      for (var i = 0; i < this.arr.length; i++) {
        if (this.$route.query.id == this.arr[i].id) {
          this.img = res.data.data.object_list[i].photo.path;
          this.name = res.data.data.object_list[i].msg;
          this.album = res.data.data.object_list[i].album.name;
          this.day = res.data.data.object_list[i].favorite_count;
        }
      }
    });
  }

}
</script>

<style>

</style>
