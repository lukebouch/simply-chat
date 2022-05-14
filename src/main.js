import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import Button from "./components/Button.vue";

import './assets/base.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('Button', Button);

app.mount("#app");
