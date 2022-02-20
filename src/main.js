import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import store from "./store/index.js";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false;
new Vue({
    render: (h) => h(App),
    router,
    store
}).$mount("#app");