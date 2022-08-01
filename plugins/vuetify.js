// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    // kittiu change primary color
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#1976d2", // #E53935
            secondary: "#26a69a", // #FFCDD2
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
