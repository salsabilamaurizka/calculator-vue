import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router";
import BootstrapVue from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue);
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, 
  linkActiveClass: "active"
});

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");