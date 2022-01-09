import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sPlace: '',
    pName: '',
    pAddress: '',
    pNumber: '',

    sTime:'',

    id: '',
    nickname: ''
  },
  mutations:{
    fnSetPlace: function(state, payload) {return state.sPlace=payload},
    fnSetName: function(state, payload) {return state.pName=payload},
    fnSetAddress: function(state, payload) {return state.pAddress=payload},
    fnSetNumber: function(state, payload) {return state.pNumber=payload},

    fnSetDate: function(state, payload) {return state.sTime=payload},

    fnSetId: function(state, payload) {
      console.log(payload)
      return state.id=payload
    },
    fnSetNickName: function(state, payload) {
      console.log(payload)
      return state.nickname=payload
    },
  },
  actions: {
  },
  getters:{
    fnGetPlace: function(state) {return state.sPlace},
    fnGetName: function(state) {return state.pName},
    fnGetAddress: function(state) {return state.pAddress},
    fnGetNumber: function(state) {return state.pNumber},

    fnGetDate: function(state) {return state.sTime},

    fnGetId: function(state) {return state.id},
    fnGetNickName: function(state) {return state.nickname},
  },
})