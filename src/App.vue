<script setup>
import tabbar from "@/components/tabbar/tabbar.vue";
import loading from "@/components/loading/loading.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="app">
    <RouterView></RouterView>
    <tabbar v-if="!route.meta.hideTabBar"></tabbar>
    <loading></loading>
  </div>
</template>

<style scoped lang="less">
.app {
  height: 100vh;
}
</style>
