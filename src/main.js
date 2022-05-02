import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMeta from 'vue-meta'

import router from './routes/router.js';

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

