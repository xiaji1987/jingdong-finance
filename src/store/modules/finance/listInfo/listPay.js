import api from '../../../../api/index'
const state = {
  dataAll: []
}
const actions = {
  getAllListPay ({commit}) {
    api.getListPay().then(res => {
      // console.log(res.data)
      commit('getAllListPay', res)
    })
  }
}

const mutations = {
  getAllListPay (state, res) {
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
