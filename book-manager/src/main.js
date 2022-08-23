import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// antd组件库
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import SpaceBetween from "./components/SpaceBetWeen";

createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .component("space-between", SpaceBetween)
  .mount("#app");
