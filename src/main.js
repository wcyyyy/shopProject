import Vue from 'vue'
import 'lib-flexible'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import store from './vuex/store'
import './validate'
import Stars from './components/Stars/Stars'
import i18n from './i18n'

Vue.component('Stars',Stars)

Vue.component('Header',Header)
new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
