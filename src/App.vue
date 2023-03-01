<script setup>
import tabbar from "@/components/tabbar/tabbar.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="app">
    <RouterView></RouterView>
    <tabbar v-if="!route.meta.hideTabBar"></tabbar>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
}
</style>
