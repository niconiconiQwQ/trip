<template>
  <div class="search">
    <div class="select-time">
      <div class="item start">
        <div class="name">住</div>
        <div class="date">{{ startDateStr }}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="date">{{ endDateStr }}</div>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
  </div>
</template>
<script setup>
import useMainStore from "@/store/modules/main";
import { formatMonthDay } from "@/utils/formatDate";
import { computed } from "vue";

const mainStore = useMainStore();
const startDateStr = computed(() =>
  formatMonthDay(mainStore.startDate, "MM.DD")
);
const endDateStr = computed(() => formatMonthDay(mainStore.endDate, "MM.DD"));
</script>
<style scoped lang="less">
.item {
  display: flex;
  font-size: 12px;
  .name {
    margin-right: 2px;
    color: #a09c9c;
  }
  .date {
    color: #5a5454;
  }
}
.search {
  display: flex;
  background-color: #f2f4f6;
  padding: 4px 6px;
  box-sizing: border-box;
  border-radius: 6px;
  .select-time {
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .end {
      position: relative;
      .date::after {
        content: "";
        width: 0;
        height: 0;
        border: 4px solid #666;
        border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        bottom: 0px;
        right: -12px;
      }
    }
  }

  .content {
    display: flex;
    flex: 1;
    align-items: center;
    color: #a09c9c;
  }
  .right {
    display: flex;
    align-items: center;
    .icon-search {
      width: 24px;
      height: 24px;
      display: inline-block;
      background-image: url(../../assets/img/home/home-sprite.png);
      background-position: -29px -151px;
      background-size: 207px 192px;
    }
  }
}
</style>
