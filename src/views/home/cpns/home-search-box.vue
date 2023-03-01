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
    <div class="date-range" @click="showCalendar = true">
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
  </div>
</template>
<script setup>
import useCityStore from "@/store/modules/city";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { formatMonthDay, diffDate } from "@/utils/formatData";
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
</script>
<style scoped lang="less">
.search-box {
  --van-calendar-popup-height: 100%;
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
  justify-content: space-evenly;
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
    margin: 0 50px;
    color: #666;
  }
}
</style>
