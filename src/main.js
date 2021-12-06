import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";

import SVGIcon from './components/SVG/icons.vue';

const app = createApp(App);

app.use(Vue2Editor);
app.use(router);
app.use(store);
app.component('SVGIcon', SVGIcon);

app.mount("#app");
