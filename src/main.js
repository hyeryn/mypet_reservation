import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaw, faSearch, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

library.add(
  faUserSecret,
  faSearch,
  faPaw,
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// kakao login - javascript key
window.Kakao.init("a1becea42c820122b65e143effe10f79");