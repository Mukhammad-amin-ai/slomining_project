import axios from 'axios'

let token = localStorage.getItem('jwt_token')
const base_url = import.meta.env.VITE_BASE_URL
const state = {
  data: [],
  dataProfile: [],
  userId: '',
  products: []
}
const mutations = {
  getData(state, payload) {
    state.data = payload
  },
  getUserId(state, payload) {
    state.userId = payload
  },
  getDataProfile(state, payload) {
    state.dataProfile = payload
  },
  getProducts(state, payload) {
    state.products = payload
  }
}
const actions = {
  async fetchData({ commit }) {
    if(localStorage.getItem('jwt_token')===null){
        window.location.href = '/sign-in'
    }

    const tokenParts = token.split('.')
    const payload = JSON.parse(atob(tokenParts[1]))
    // console.log(payload)
    commit('getUserId', payload.userId)
    // console.log(payload.userId)
    if (payload.userId) {
      const tokenB = localStorage.getItem('jwt_token').replace(/^"(.*)"$/, '$1')
      try {
        let response = await axios.get(`${base_url}api/getUserById/${payload.userId}`,
          { headers: { Authorization: `Bearer ${tokenB}` } })
        commit('getData', response.data)
        commit('getDataProfile', response.data)
        // console.log( response.data)
      } catch (err) {
        console.error('error of decoding', err)
        if(err.message === 'Unauthorized'){
          window.location.href = '/sign-in'
        }
      }
    }
  },
  async fetchProduct({ commit }) {
    try {
      let response = await axios.get(`${base_url}api/products`)
      let filtered = response.data.sort((a, b) => a.contract_price - b.contract_price)
      commit('getProducts', filtered)
      console.log(response.data)
    } catch (e) {
      console.error(e)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}