// import axios from 'axios'
import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    activemodal: true,
    activeClass: '',
    isLogin: false,
    convert: []
  },
  mutations: {
    setModal(state, payload) {
      state.activemodal = payload
    },
    setClass(state, payload) {
      state.activeClass = payload
    },
    setConvert(state, payload) {
      state.convert = payload
    }

  },
  actions: {
    modalfunc({ commit }) {
      commit('setClass', 'active_navbar')
    },
    modalClose({ commit }) {
      commit('setClass', '')
    },
    async convert({ commit }, option) {
      try {
        let response = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=${option}&api_key=28f0d66a3a7be247a5ecd95f6ab3ad1f2533f7e22625601b9b4fd753508a6f64`)
        commit('setConvert', response.data[option])
      } catch (e) {
        console.error(e);
      }
    }
  },

})


export default store
