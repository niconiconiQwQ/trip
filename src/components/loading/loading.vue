<template>
  <div
    class="global-loading"
    v-show="mainStore.isLoading"
    @click="mainStore.isLoading = false"
  >
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="" />
    </div>
  </div>
</template>
<script setup>
import useMainStore from "@/store/modules/main";
const mainStore = useMainStore();
</script>
<style scoped lang="less">
.global-loading {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  .bg {
    width: 104px;
    height: 104px;
    background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 70px;
    height: 70px;
  }
}
</style>
