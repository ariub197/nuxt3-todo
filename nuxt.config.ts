// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ["@/css/style.scss"],
  ssr: false,
  app: {
    baseURL: '/js/nuxt3-todo/'
  },
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "@/css/*.scss',
  //       },
  //     },
  //   },
  // },
});
