export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
  head: {
  title: "Nuxt App",
  meta: [
  { charset: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  {
  hid: "description",
  name: "description",
  content: "Meta description",
  },
  ],
  link: [
  {
  rel: "stylesheet",
  href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
  },
  ],
  script: [
  {
  src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  defer: true,
  },
  ],
  },
  },
  });