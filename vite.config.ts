import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env": {},
  },
  resolve: {
    alias: [
      {
        find: /^~(.*)$/,
        replacement: "node_modules/$1",
      },
    ],
  },
});
