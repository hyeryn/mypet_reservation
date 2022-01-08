import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sPlace: '',
    pName: '',
    pAddress: '',
    pNumber: '',

    id: '',
    nickname: '',
  },
  mutations:{
    fnSetPlace: function(state, payload) {return state.sPlace=payload},
    fnSetName: function(state, payload) {return state.pName=payload},
    fnSetAddress: function(state, payload) {return state.pAddress=payload},
    fnSetNumber: function(state, payload) {return state.pNumber=payload},

    fnSetId: function(state, payload) {return state.id=payload},
    fnSetNickName: function(state, payload) {return state.nickname=payload},
  },
  getters:{
    fnGetPlace: function(state) {return state.sPlace},
    fnGetName: function(state) {return state.sName},
    fnGetAddress: function(state) {return state.pAddress},
    fnGetNumber: function(state) {return state.pNumber},

    fnGetId: function(state) {return state.id},
    fnGetNickName: function(state) {return state.nickname},
  }
})