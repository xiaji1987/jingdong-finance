import api from '../../../../api/index'
const state = {
  data: []
}

const actions = {
  getAllListWhite ({commit}) {
    api.getListWhite().then(res => {
      console.log(res.data)
      commit('getAllListWhite', res)
    })
  }
}

const mutations = {
  getAllListWhite (state, res) {
    state.data = res.data
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
