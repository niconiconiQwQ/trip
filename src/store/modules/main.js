import { defineStore } from "pinia";
// 初始化时间
const startDate = new Date(); // 现在时间
const endDate = new Date();
endDate.setDate(startDate.getDate() + 1); // 结束时间
const useMainStore = defineStore("main", {
  state: () => {
    return {
      startDate,
      endDate,
      isLoading: false,
    };
  },
  actions: {},
});
export default useMainStore;
