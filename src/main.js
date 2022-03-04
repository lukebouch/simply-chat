import { createApp } from "vue";
import * as VueRouter from "vue-router";
import App from "./App.vue";
import "./assets/main.css";

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = createApp(App);
app.use(router);
app.mount("#app");
