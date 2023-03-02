<template>
  <div class="tabbar">
    <van-tabbar route v-model="currentIndex" active-color="#ff9875">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img
              :src="
                getAssetsUrl(
                  index === currentIndex ? item.imageActive : item.image
                )
              "
            />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import tabbarData from "@/assets/localData/tabbarData";
import getAssetsUrl from "@/utils/load_assets_img";
const route = useRoute();
const currentIndex = ref(0);
// 监听路由改变,设置currentIndex
watch(route, (newRoute) => {
  const index = tabbarData.findIndex((item) => item.path === newRoute.path);
  if (index === -1) return;
  currentIndex.value = index;
});
</script>
<style scoped lang="less">
.tabbar {
  img {
    height: 28px;
  }
}
</style>
