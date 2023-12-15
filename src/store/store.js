import { createStore } from "vuex";


const store = createStore({
    state: {
        activemodal: true,
        activeClass: ''
    },
    mutations: {
        setModal(state, payload) {
            state.activemodal = payload;
        },
        setClass(state, payload) {
            state.activeClass = payload;
        }
    },
    actions: {
        modalfunc({ commit }) {
            // commit('setModal', !this.state.activemodal)
            commit('setClass', 'active')
        }
    }
})

export default store