import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./app.vue";
import "./index.css";

Vue.use(BootstrapVue);

new Vue(App).$mount("#app");
