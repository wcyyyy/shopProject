import Vue from 'vue'
import 'lib-flexible'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import store from './vuex/store'
import './validate'
import Stars from './components/Stars/Stars'
import * as API from '@/api'
import i18n from './i18n'
import '@/mock/mock-server.js'

Vue.prototype.$API=API

Vue.component('Stars',Stars)
Vue.component('Header',Header)

Vue.component(Button.name, Button)
new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
