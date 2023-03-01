<template>
  <div class="city">
    <div class="top">
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="cancelClick"
      />
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="2">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="key">
        <city-group v-show="key === tabActive" :groupData="value"></city-group>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import cityGroup from "./cpns/city-group.vue";
import useCityStore from "@/store/modules/city";
import { storeToRefs } from "pinia";
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);
const router = useRouter();
const searchValue = ref("");
const tabActive = ref();
const cancelClick = () => {
  router.back();
};
</script>
<style scoped lang="less">
.city {
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
