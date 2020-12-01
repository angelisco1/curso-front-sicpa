import Vue from 'vue'
import App from './App.vue'
import router from './routing';
import './componentes-globales'
import './filtros-globales'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router: router,
  router
}).$mount('#app')