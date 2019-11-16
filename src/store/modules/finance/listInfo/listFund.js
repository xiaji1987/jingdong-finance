import api from '../../../../api/index'
const state = {
  dataAll: []
}
const actions = {
  getAllListFund ({commit}) {
    api.getListFund().then(res => {
      // console.log(res.data)
      commit('getAllListFund', res)
    })
  }
}

const mutations = {
  getAllListFund (state, res) {
    state.dataAll = res.data
    // console.log(state.dataLeft)
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
