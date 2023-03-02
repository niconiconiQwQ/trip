<template>
  <div class="catetories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>
<script setup>
import useHome from "@/store/modules/home";
import { storeToRefs } from "pinia";
const homeStore = useHome();
const { categories } = storeToRefs(homeStore);
</script>
<style scoped lang="less">
.catetories {
  display: flex;
  overflow-x: auto;
  margin-top: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
}
.item {
  margin: 0 10px;
  flex-shrink: 0;
  width: 50px;
  text-align: center;
  img {
    width: 32px;
    height: 32px;
  }
  .title {
    font-size: 12px;
    margin-top: 6px;
  }
}
</style>
