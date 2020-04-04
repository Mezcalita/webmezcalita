import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueDropdown from 'vue-dynamic-dropdown'
// import carousel from 'vue-owl-carousel';

Vue.config.productionTip = false

Vue.component('vue-dropdown', VueDropdown);
// Vue.component('vue-owl-carousel', carousel);

// app.js
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
