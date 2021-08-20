import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./axios/index"; // 这里这里
import { post, get } from "@/axios/index";
import APIUrl from "@/axios/api.url";
import ApiConfig from "./axios/api/index";
import sendAxios from "./axios/axios";
// Object.defineProperty(Vue.prototype, '$loaderApiLibrary', {
//   value: Loader
// });
// Object.defineProperty(Vue.prototype, "$api", { value: ApiConfig });
Vue.prototype.$serapi = ApiConfig;
Vue.prototype.$sendapi = sendAxios;
Vue.prototype.$api = APIUrl;
Vue.prototype.$get = get;
Vue.prototype.$post = post;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
