import { setup } from "@storybook/vue3";
import { createPinia } from "pinia";
import { type App } from "vue";
import router from "../router/index";

const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
  app.use(router);
});
