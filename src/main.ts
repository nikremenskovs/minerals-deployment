import { createApp } from "vue";
import { createPinia } from "pinia";
import { createSquidexService } from "@/services/squidexService.js";

import App from "./App.vue";
import router from "./router";

import ResponsiveImage from "./components/shared/ResponsiveImage.vue";
import NotFound from "./components/shared/NotFound.vue";

await createSquidexService();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

app.component("ResponsiveImage", ResponsiveImage);
app.component("NotFound", NotFound);
