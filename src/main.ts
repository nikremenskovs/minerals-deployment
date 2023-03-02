import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ResponsiveImage from "./components/shared/ResponsiveImage.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

app.component("ResponsiveImage", ResponsiveImage);
