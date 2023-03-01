<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" active-color="#ff9875">
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
import { ref } from "vue";
import tabbarData from "@/assets/localData/tabbarData";
import getAssetsUrl from "@/utils/load_assets_img";
const currentIndex = ref(0);
</script>
<style scoped lang="less">
.tabbar {
  img {
    height: 28px;
  }
}
</style>
