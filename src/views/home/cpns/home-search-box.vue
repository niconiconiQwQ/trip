<template>
  <div class="search-box">
    <!-- 定位 -->
    <div class="location">
      <div class="city" @click="cityClick">
        {{ cityStore.currentCity.cityName }}
      </div>
      <div class="position" @click="positionClick">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期 -->
    <div class="date-range bottom-gray-line" @click="showCalendar = true">
      <div class="start">
        <span class="tip">入住</span>
        <span class="time">{{ startDate }}</span>
      </div>
      <div class="stay">
        <span>共{{ stayDays }}晚</span>
      </div>
      <div class="end">
        <span class="tip">离店</span>
        <span class="time">{{ endDate }}</span>
      </div>
    </div>
    <van-calendar
      v-model:show="showCalendar"
      :show-confirm="false"
      type="range"
      @confirm="onConfirm"
      color="#ff9854"
      :round="false"
    />
    <!-- 价格人数 -->
    <div class="item price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="item keyword bottom-gray-line">关键字/位置/民宿名</div>
    <!-- 热门建议 -->
    <div class="item hot-suggest">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="suggest-item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <!-- 搜索按钮 -->
    <div class="item search-btn">
      <div class="btn" @click="searchClick">搜索</div>
    </div>
  </div>
</template>
<script setup>
import useCityStore from "@/store/modules/city";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import useHome from "@/store/modules/home";
import { useRouter } from "vue-router";
import { formatMonthDay, diffDate } from "@/utils/formatData";
const homeStore = useHome();
const { hotSuggests } = storeToRefs(homeStore);
const cityStore = useCityStore();
const router = useRouter();
const showCalendar = ref(false);
//点击位置
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log("ok");
    },
    (error) => {
      console.log("fail");
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
};
// 点击城市
const cityClick = () => {
  router.push("/city");
};

// 日期相关变量
const nowDate = new Date(); // 现在时间
const newDate = new Date();
newDate.setDate(nowDate.getDate() + 1);
const startDate = ref(formatMonthDay(nowDate)); // 格式化入住时间
const endDate = ref(formatMonthDay(newDate)); // 格式化结束时间
const stayDays = ref(diffDate(nowDate, newDate)); // 住多久
const onConfirm = (value) => {
  const selectStart = value[0];
  const selectEnd = value[1];
  startDate.value = formatMonthDay(selectStart);
  endDate.value = formatMonthDay(selectEnd);
  stayDays.value = diffDate(selectStart, selectEnd);
  showCalendar.value = false; // 隐藏日期
};
const searchClick = () => {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      stayDays: stayDays.value,
    },
  });
};
</script>
<style scoped lang="less">
.search-box {
  --van-calendar-popup-height: 100%;
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  color: #999;
  .start {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .end {
    min-width: 30%;
    padding-left: 20px;
  }
}
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }
  .position {
    width: 78px;
    display: flex;
    color: #666;
    font-size: 12px;
    img {
      position: relative;
      padding-left: 4px;
      bottom: 3px;
      width: 18px;
      height: 18px;
    }
  }
}
.date-range {
  display: flex;
  padding: 0 20px;
  border-bottom: 1px solid #f7f7f7;
  height: 44px;
  .start,
  .end {
    display: flex;
    flex-direction: column;
    .tip {
      font-size: 12px;
      color: #666;
      margin-bottom: 2px;
    }
  }
  .stay {
    margin: 0 70px;
    color: #666;
  }
}

.hot-suggest {
  margin: 10px 0;
  height: auto;
  .suggest-item {
    padding: 4px 8px;
    border-radius: 3px;
    margin: 3px;
    font-size: 12px;
    line-height: 1;
  }
}
.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    font-size: 18px;
    font-weight: 500;
    max-height: 50px;
    line-height: 38px;
    text-align: center;
    background-color: #ccc;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
