import api from '../../../../api/index'
const state = {
  data: []
}

const actions = {
  getAllTopBar ({commit}) {
    api.getTopBar().then(res => {
      // console.log(res)
      commit('getAllTopBar', res)
    })
  }
}

const mutations = {
  getAllTopBar (state, res) {
    state.data = res.topBar
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
