import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { worker } from "./helpers/mocks/browser";

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  worker.start();
}

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
