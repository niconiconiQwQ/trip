import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";
export default function useScroll() {
  const isReachBottom = ref(false);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const clientHeight = ref(0);
  throttle();
  const listenScrollHandle = throttle(() => {
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    clientHeight.value = document.documentElement.clientHeight;
    // 到达底部了
    if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
      isReachBottom.value = true;
    }
  }, 100);
  onMounted(() => {
    // 监听窗口滚动，加载更多数据，离开页面移除监听
    window.addEventListener("scroll", listenScrollHandle);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", listenScrollHandle);
  });
  return { isReachBottom, scrollTop, scrollHeight, clientHeight };
}
