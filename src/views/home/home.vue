<template>
  <div class="home">
    <navBar></navBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import navBar from "./cpns/home-nav-bar.vue";
</script>
<style scoped lang="less">
.home {
  .banner {
    img {
      width: 100%;
    }
  }
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    .city {
      flex: 1;
    }
    .position {
      width: 78px;
      display: flex;
      img {
        position: relative;
        padding-left: 4px;
        bottom: 3px;
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>
