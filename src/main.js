import Vue from "vue";
import App from "./App.vue";

import Modal from "./plugins/Modal";

import "./global.scss";

Vue.config.productionTip = false;

Vue.use(Modal);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
