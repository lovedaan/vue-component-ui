import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import baseCom from '@/components/base/index.js'

Vue.use(baseCom);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
