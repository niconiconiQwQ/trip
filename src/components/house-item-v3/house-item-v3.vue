<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="" />
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="" />
          <span>{{ itemData.location }}</span>
        </div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="summary">
          {{ itemData.summaryText }}
        </div>
        <div class="price">
          <div class="new">￥{{ itemData.finalPrice }}</div>
          <div class="old">{{ itemData.productPrice }}</div>
          <div class="tip" v-if="itemData.priceTipBadge">
            {{ itemData?.priceTipBadge?.text }}
          </div>
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
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    .cover {
      img {
        width: 100%;
      }
    }
    .info {
      font-size: 12px;
      padding: 0 10px;
      color: #000;
      .location {
        margin: 10px 0;
        img {
          width: 14px;
          height: 14px;
          margin-right: 4px;
        }
      }
      .summary {
        margin: 8px 0px;
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
        .new {
          color: #d6a51d;
          font-size: 14px;
        }
        .old {
          margin: 0 4px;
          text-decoration: line-through;
          color: #999;
        }
        .tip {
          display: flex;
          align-items: center;
          padding: 0px 6px;
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
          color: #fff;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
