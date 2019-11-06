import api from '../../../api/index'
const state = {
  data: []
}

const actions = {
  getAllHeaderBar ({commit}) {
    api.getheaderBar().then(res => {
      // console.log(res)
      commit('getAllHeaderBar', res)
    })
  }
}

const mutations = {
  getAllHeaderBar (state, res) {
    state.data = res.headerbar
    // console.log(state.data)
  }
}

const getters = {
  getArrFir: function (state) {
    if (state.data.length === 0) {
      return []
    }
    // console.log(state.data.menu)
    return state.data.menu
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations,
  getters
})
