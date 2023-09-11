// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: ["@pinia/nuxt", "@nuxtjs/apollo"],
  pinia: {
    autoImports: ["defineStore"],
  },
  imports: {
    dirs: ["./stores"],
  },
  apollo: {
    autoImports: true,
    clients: {
      default: {
        httpEndpoint:
          "https://swapi-graphql.netlify.app/.netlify/functions/index",
      },
    },
  },
});
