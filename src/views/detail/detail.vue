<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />

    <h2>detail{{ $route.params.id }}</h2>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const onClickLeft = () => {
  router.back();
};
</script>
<style scoped lang="less">
.detail {
  --van-nav-bar-icon-color: var(--primary-color);
  --van-nav-bar-text-color: var(--primary-color);
  --van-nav-bar-title-text-color: var(--primary-color);
}
</style>
