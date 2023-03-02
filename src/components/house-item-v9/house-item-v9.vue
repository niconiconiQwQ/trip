<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="" />
      </div>
      <div class="info">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="price">
          <van-rate
            :size="14"
            color="#fff"
            :model-value="Number(itemData.commentScore)"
            allow-half
            readonly
          />
          <div class="new-price">￥{{ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  itemData: {
    type: Object,
    defalt: () => ({}),
  },
});
</script>
<style scoped lang="less">
.house-item {
  width: 50%;
  padding: 8px 4px;
  box-sizing: border-box;
  .item-inner {
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    .cover {
      img {
        width: 100%;
      }
    }
    .info {
      position: absolute;
      bottom: 5px;
      padding: 0 10px;
      color: #fff;
      .summary {
        font-size: 12px;
      }
      .name {
        margin: 5px 0;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
