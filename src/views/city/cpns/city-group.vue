<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="city in groupData.hotCities">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>
      <template v-for="cityGroup in groupData.cities" :key="cityGroup.group">
        <van-index-anchor :index="cityGroup.group" />
        <template v-for="(city, index) in cityGroup.cities" :key="city.cityId">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>
<script setup>
import { computed } from "vue";
import useCityStore from "@/store/modules/city";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const router = useRouter();
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);

const props = defineProps({
  groupData: {
    type: Object,
    default: {},
  },
});

const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group);
  list.unshift("#");
  return list;
});
const cityClick = (city) => {
  currentCity.value = city;
  router.back();
};
</script>
<style scoped lang="less">
.city-group {
  .list {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    padding-right: 20px;
    flex-wrap: wrap;
    .city {
      width: 74px;
      height: 28px;
      background-color: #fff4ec;
      border-radius: 14px;
      font-size: 12px;
      line-height: 28px;
      text-align: center;
      margin-top: 10px;
    }
  }
}
</style>
