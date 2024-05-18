// import axios from 'axios';
//
// let token = localStorage.getItem('jwt_token')
//
// const base_url = import.meta.env.VITE_BASE_URL
//  const state = {
//     endTime: null,
//     remainingTime: null,
//     interval: null,
//   }
//  const mutations={
//     SET_END_TIME(state, endTime) {
//       state.endTime = new Date(endTime);
//     },
//     SET_REMAINING_TIME(state, remainingTime) {
//       state.remainingTime = remainingTime;
//     },
//
//     SET_INTERVAL(state, interval) {
//       state.interval = interval;
//     },
//     CLEAR_INTERVAL(state) {
//       clearInterval(state.interval);
//       state.interval = null;
//     },
//     RESET_TIMER(state) {
//       state.endTime = null;
//       state.remainingTime = null;
//     },
//   }
//  const actions = {
//     // async startTimer({ commit, dispatch }, hours) {
//     //   try {
//     //     const response = await axios.post(`${base_url}set-timer`, { hours });
//     //     commit('SET_END_TIME', response.data.endTime);
//     //     dispatch('startCountdown');
//     //   } catch (error) {
//     //     console.error(error);
//     //   }
//     // },
//     async getTimer({ commit, dispatch },index) {
//       const tokenParts = token.split('.')
//       const payload = JSON.parse(atob(tokenParts[1]))
//       if (payload.userId) {
//         const tokenB = localStorage.getItem('jwt_token').replace(/^"(.*)"$/, '$1')
//         try {
//           let response = await axios.get(`${base_url}api/getUserById/${payload.userId}`,
//             { headers: { Authorization: `Bearer ${tokenB}` } })
//           console.log(response.data.contracts[index].contract_timer)
//           commit('SET_END_TIME', response.data.contracts[index].contract_timer);
//           dispatch('startCountdown');
//         } catch (err) {
//           console.error('error of decoding', err)
//         }
//       }
//     },
//     async stopTimer({ commit }) {
//       try {
//         await axios.post(`${base_url}stop-timer`);
//         commit('CLEAR_INTERVAL');
//         commit('RESET_TIMER');
//       } catch (error) {
//         console.error(error);
//       }
//     },
//     startCountdown({ commit, dispatch }) {
//       commit('CLEAR_INTERVAL');
//       dispatch('updateRemainingTime');
//       const interval = setInterval(() => {
//         dispatch('updateRemainingTime');
//       }, 1000);
//       commit('SET_INTERVAL', interval);
//     },
//     updateRemainingTime({ commit, state }) {
//       const now = new Date();
//       const remainingTime = state.endTime - now;
//       commit('SET_REMAINING_TIME', remainingTime);
//       if (remainingTime <= 0) {
//         commit('CLEAR_INTERVAL');
//         commit('SET_REMAINING_TIME', 0);
//       }
//     },
//   }
//  const getters = {
//     formattedTime(state) {
//       if (state.remainingTime === null) return '';
//       const hours = Math.floor(state.remainingTime / (60 * 60 * 1000));
//       const minutes = Math.floor((state.remainingTime % (60 * 60 * 1000)) / (60 * 1000));
//       const seconds = Math.floor((state.remainingTime % (60 * 1000)) / 1000);
//       return `${hours}h ${minutes}m ${seconds}s`;
//     },
//   }
//
//   export default {
//     namespaced: true,
//     state,
//     mutations,
//     actions,
//     getters
//   }
//   test =============================================
import axios from 'axios';

let token = localStorage.getItem('jwt_token')

const base_url = import.meta.env.VITE_BASE_URL
const state = {
  timers: {}, // Store timers keyed by contract index
};

const mutations = {
  SET_END_TIME(state, { index, endTime }) {
    if (!state.timers[index]) {
      state.timers = { ...state.timers, [index]: { endTime: null, remainingTime: null, interval: null } };
    }
    state.timers[index].endTime = new Date(endTime);
  },
  SET_REMAINING_TIME(state, { index, remainingTime }) {
    state.timers[index].remainingTime = remainingTime;
  },
  SET_INTERVAL(state, { index, interval }) {
    state.timers[index].interval = interval;
  },
  CLEAR_INTERVAL(state, index) {
    if (state.timers[index].interval) {
      clearInterval(state.timers[index].interval);
      state.timers[index].interval = null;
    }
  },
  RESET_TIMER(state, index) {
    if (state.timers[index]) {
      state.timers[index].endTime = null;
      state.timers[index].remainingTime = null;
    }
  },
};

const actions = {
  async getTimer({ commit, dispatch }, index) {
    const tokenParts = token.split('.');
    const payload = JSON.parse(atob(tokenParts[1]));
    if (payload.userId) {
      const tokenB = localStorage.getItem('jwt_token').replace(/^"(.*)"$/, '$1');
      try {
        let response = await axios.get(`${base_url}api/getUserById/${payload.userId}`, {
          headers: { Authorization: `Bearer ${tokenB}` },
        });
        console.log(response.data.contracts[index].contract_timer);
        commit('SET_END_TIME', { index, endTime: response.data.contracts[index].contract_timer });
        dispatch('startCountdown', index);
      } catch (err) {
        console.error('error of decoding', err);
      }
    }
  },
  async stopTimer({ commit }, index) {
    try {
      await axios.post(`${base_url}stop-timer`);
      commit('CLEAR_INTERVAL', index);
      commit('RESET_TIMER', index);
    } catch (error) {
      console.error(error);
    }
  },
  startCountdown({ commit, dispatch }, index) {
    commit('CLEAR_INTERVAL', index);
    dispatch('updateRemainingTime', index);
    const interval = setInterval(() => {
      dispatch('updateRemainingTime', index);
    }, 1000);
    commit('SET_INTERVAL', { index, interval });
  },
  updateRemainingTime({ commit, state }, index) {
    const now = new Date();
    const remainingTime = state.timers[index].endTime - now;
    commit('SET_REMAINING_TIME', { index, remainingTime });
    if (remainingTime <= 0) {
      commit('CLEAR_INTERVAL', index);
      commit('SET_REMAINING_TIME', { index, remainingTime: 0 });
    }
  },
};

const getters = {
  formattedTime: (state) => (index) => {
    if (!state.timers[index] || state.timers[index].remainingTime === null) return '';
    const hours = Math.floor(state.timers[index].remainingTime / (60 * 60 * 1000));
    const minutes = Math.floor((state.timers[index].remainingTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((state.timers[index].remainingTime % (60 * 1000)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};



//   ==================================================


//PROTOTYPE========================================================================================
// import axios from 'axios';
//
// const base_url = import.meta.env.VITE_BASE_URL
// const state = {
//   endTime: null,
//   remainingTime: null,
//   interval: null,
// }
// const mutations={
//   SET_END_TIME(state, endTime) {
//     state.endTime = new Date(endTime);
//   },
//   SET_REMAINING_TIME(state, remainingTime) {
//     state.remainingTime = remainingTime;
//   },
//   SET_INTERVAL(state, interval) {
//     state.interval = interval;
//   },
//   CLEAR_INTERVAL(state) {
//     clearInterval(state.interval);
//     state.interval = null;
//   },
//   RESET_TIMER(state) {
//     state.endTime = null;
//     state.remainingTime = null;
//   },
// }
// const actions = {
//   async startTimer({ commit, dispatch }, hours) {
//     try {
//       const response = await axios.post(`${base_url}set-timer`, { hours });
//       commit('SET_END_TIME', response.data.endTime);
//       dispatch('startCountdown');
//     } catch (error) {
//       console.error(error);
//     }
//   },
//   async getTimer({ commit, dispatch }) {
//     try {
//       const response = await axios.get(`${base_url}get-timer`);
//       if (response.data.endTime) {
//         commit('SET_END_TIME', response.data.endTime);
//         console.log(response.data.remainingTime)
//         commit('SET_REMAINING_TIME', response.data.remainingTime);
//         dispatch('startCountdown');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   },
//   async stopTimer({ commit }) {
//     try {
//       await axios.post(`${base_url}stop-timer`);
//       commit('CLEAR_INTERVAL');
//       commit('RESET_TIMER');
//     } catch (error) {
//       console.error(error);
//     }
//   },
//   startCountdown({ commit, dispatch }) {
//     commit('CLEAR_INTERVAL');
//     dispatch('updateRemainingTime');
//     const interval = setInterval(() => {
//       dispatch('updateRemainingTime');
//     }, 1000);
//     commit('SET_INTERVAL', interval);
//   },
//   updateRemainingTime({ commit, state }) {
//     const now = new Date();
//     const remainingTime = state.endTime - now;
//     commit('SET_REMAINING_TIME', remainingTime);
//     if (remainingTime <= 0) {
//       commit('CLEAR_INTERVAL');
//       commit('SET_REMAINING_TIME', 0);
//     }
//   },
// }
// const getters = {
//   formattedTime(state) {
//     if (state.remainingTime === null) return '';
//     const hours = Math.floor(state.remainingTime / (60 * 60 * 1000));
//     const minutes = Math.floor((state.remainingTime % (60 * 60 * 1000)) / (60 * 1000));
//     const seconds = Math.floor((state.remainingTime % (60 * 1000)) / 1000);
//     return `${hours}h ${minutes}m ${seconds}s`;
//   },
// }
//
// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions,
//   getters
// }