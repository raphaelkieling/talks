import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "highlightjs/styles/monokai.css";
import App from "./app.vue";
import VueHighlightJS from "vue-highlightjs";
import "./index.css";

Vue.use(VueHighlightJS);
Vue.use(BootstrapVue);

new Vue(App).$mount("#app");
