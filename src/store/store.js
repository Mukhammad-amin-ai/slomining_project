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
        let response = await axios.get(`https://slomining.com/api/index/roe?alias=${option}`)
        console.log(response);
        commit('setConvert', response.data?.data?.price)
      } catch (e) {
        console.error(e);
      }
    }
  },

})


export default store
