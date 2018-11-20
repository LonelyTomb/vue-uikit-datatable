import Vue from "vue";
import "uikit";
import "./assets/scss/app.scss";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");