import api from '../../../../api/index'
const state = {
  data: []
}

const actions = {
  getAllMenuPendant ({commit}) {
    api.getMenuPendant().then(res => {
      // console.log(res)
      commit('getAllMenuPendant', res)
    })
  }
}

const mutations = {
  getAllMenuPendant (state, res) {
    state.data = res.data
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
