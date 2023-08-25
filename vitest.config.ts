import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "happy-dom",
    coverage: {
      provider: "istanbul", // or 'v8',
      reporter: ["text", "json"],
    },
  },
});
