import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "DesignPub",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    script: [],
    link: [
      // { rel: "stylesheet", href: "https://use.typekit.net/tsd2tcy.css" },
      // { rel: "stylesheet", href: "https://cloud.typography.com/7264818/7115832/css/fonts.css" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
      },
    ],
  },
  modules: ['nuxt-gtag'],
  gtag: {
    id: 'G-CP3NC0GSYB'
  },
  css: [
    '@ccmdesign/ccm-ds/assets/css/main.scss',
    'public/assets/theme.css',
    'public/assets/styles.css',
  ],
  components: {
    "dirs": [
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/03-objects'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/04-components'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/05-modules'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/06-sections'),
        "global": true
      },
      "~/components"
    ]
  },
});
