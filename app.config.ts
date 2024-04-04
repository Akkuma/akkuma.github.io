import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    baseURL: process.env.BASE_PATH,
    prerender: {
      crawlLinks: true,
    },
  },
});
