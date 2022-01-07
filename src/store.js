import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sPlace: '',
    pName: '',
    pAddress: '',
    pNumber: ''
  },
  mutations:{
    fnSetPlace: function(state, payload) {return state.sPlace=payload},
    fnSetName: function(state, payload) {return state.pName=payload},
    fnSetAddress: function(state, payload) {return state.pAddress=payload},
    fnSetNumber: function(state, payload) {return state.pNumber=payload},
  },
  getters:{
    fnGetPlace: function(state) {return state.sPlace},
    fnGetName: function(state) {return state.sName},
    fnGetAddress: function(state) {return state.pAddress},
    fnGetNumber: function(state) {return state.pNumber},
  }
})