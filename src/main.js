import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BasicHeader from  './views/partials/BasicHeader'
import Sidebar from  './views/partials/Sidebar'

Vue.component('basicheader', BasicHeader)
Vue.component('sidebar', Sidebar)


// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
