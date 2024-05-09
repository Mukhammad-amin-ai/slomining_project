import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    activemodal: true,
    activeClass: '',
    isLogin: false,
    convert: [],
    loading: false,
    dailyReward: []
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
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setRewards(state, payload) {
      state.dailyReward = payload
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
        commit('setLoading', true)
        let response = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=${option}&api_key=60a3a8c4121577763492d51f767b2d7545cce4c738aa1a6ccc52beff4f798960`)
        if (response.status === 200) {
          commit('setConvert', response.data[option])
          commit('setLoading', false)
        }
      } catch (e) {
        console.error(e);
      }
    }
  },

})


export default store
