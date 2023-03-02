<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <houseItemV3
          v-if="item.discoveryContentType === 3"
          :itemData="item.data"
          @click="itemClick(item)"
        ></houseItemV3>
        <houseItemV9
          v-else-if="item.discoveryContentType === 9"
          :itemData="item.data"
          @click="itemClick(item)"
        ></houseItemV9>
      </template>
    </div>
  </div>
</template>
<script setup>
import useHome from "@/store/modules/home";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import houseItemV3 from "@/components/house-item-v3/house-item-v3.vue";
import houseItemV9 from "@/components/house-item-v9/house-item-v9.vue";
const router = useRouter();
const homeStore = useHome();
const { houseList } = storeToRefs(homeStore);
const itemClick = (item) => {
  router.push(`/detail/${item.data.houseId}`);
};
</script>
<style scoped lang="less">
.content {
  padding: 10px;
  box-sizing: border-box;
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
