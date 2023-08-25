import { setup } from "@storybook/vue3";
import { createPinia } from "pinia";
import { type App } from "vue";

const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
});
