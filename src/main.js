import Vue from 'vue';
import AOS from 'aos';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

AOS.init();
