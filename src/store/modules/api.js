import axios from 'axios'
let token = localStorage.getItem('jwt_token')
const base_url = import.meta.env.VITE_BASE_URL
const state = {
    data:[],
    dataProfile:[],
    userId:""
}
const mutations = {
  getData(state,payload){
    state.data = payload
  },
  getUserId(state,payload){
    state.userId = payload
  },
  getDataProfile(state,payload){
    state.dataProfile = payload
  }
}
const actions = {
  async fetchData({commit}){
    const tokenParts = token.split('.')
    const payload = JSON.parse(atob(tokenParts[1]))
    // console.log(payload)
    commit("getUserId",payload.userId)
    // console.log(payload.userId)
    if (payload.userId) {
      const tokenB = localStorage.getItem('jwt_token').replace(/^"(.*)"$/, '$1')
      try {
        let response = await axios.get(`${base_url}api/getUserById/${payload.userId}`,
          { headers: { Authorization: `Bearer ${tokenB}` } })
        commit('getData',response.data)
        commit('getDataProfile',response.data)
        console.log( response.data)
      } catch (err) {
        console.error('error of decoding', err)
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}