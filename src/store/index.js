import Vue from 'vue';
import Vuex from 'vuex';
import account from './modules/account';
import auth from './modules/auth';
 
Vue.use(Vuex);
 
export default new Vuex.Store({
  strict: true,
  modules: {
    account,
    auth,
  },
});