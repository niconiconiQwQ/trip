<template>
  <div class="home">
    <div class="search-bar" v-if="isShowSearchBar">
      <searchBar />
    </div>
    <homeNavBar></homeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeSearchBox></homeSearchBox>
    <homeCategories></homeCategories>
    <homeContent></homeContent>
  </div>
</template>
<script setup>
import { watch, computed } from "vue";
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeSearchBox from "./cpns/home-search-box.vue";
import homeCategories from "./cpns/home-categories.vue";
import homeContent from "./cpns/home-content.vue";
import searchBar from "@/components/search-bar/search-bar.vue";
import useHome from "@/store/modules/home";
import useScroll from "@/hooks/useScrll";
const homeStore = useHome();
homeStore.fetchHotSuggests();
homeStore.fetchCategoryData();
homeStore.fetchHouseList();
const { isReachBottom, scrollTop } = useScroll();
watch(isReachBottom, (newVal) => {
  if (newVal) {
    homeStore.fetchHouseList().then((res) => {
      isReachBottom.value = false;
    });
  }
});
//控制顶部搜索框显示隐藏
const isShowSearchBar = computed(() => {
  return scrollTop.value > 360;
});
</script>
<style scoped lang="less">
.home {
  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    background-color: #fff;
    z-index: 6;
    padding: 10px 16px;
    box-sizing: border-box;
  }
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
