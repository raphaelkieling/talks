import Vue from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlightjs/styles/monokai.css";
import App from "./app.vue";
import VueHighlightJS from "vue-highlightjs";
import "./index.css";

Vue.use(VueHighlightJS);

new Vue(App).$mount("#app");
