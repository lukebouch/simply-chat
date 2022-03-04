import * as Vue from "vue";
import * as VueRouter from "vue-router";
import App from "./App.vue";
import "./assets/main.css";

import routes from "./routes"


const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = Vue.createApp(App);
app.use(router);
app.mount("#app");
